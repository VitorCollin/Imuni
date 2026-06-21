import { Component, inject, OnInit, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardSubtitle, IonCard, IonCardHeader, IonCardTitle, IonList, IonButton } from '@ionic/angular/standalone';
import { Crianca } from '../core/models/crianca.model';
import { CriancaService } from '../core/services/crianca.service';
import { AuthService } from '../core/services/auth.service';
import { DatePipe } from '@angular/common';
import { Auth, authState } from '@angular/fire/auth';
import { of, switchMap } from 'rxjs';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonList, IonCardTitle, IonCardHeader, IonCard, IonCardSubtitle, IonHeader, IonToolbar, IonTitle, IonContent, DatePipe, RouterLink],
})
export class HomePage implements OnInit {
  public criancas = signal<Crianca[]>([]);
  private criancaService = inject(CriancaService);
  private authService = inject(AuthService);
  private auth= inject(Auth);
  
  ngOnInit(){
    this.listarDados();
  }

  listarDados(){
    authState(this.auth).pipe(
      switchMap(usuario => {
        if(usuario){
        return this.criancaService.listarCriancas(usuario.uid);
        } else{
          return of([]);
        }
      })
    ).subscribe(dados => {
      this.criancas.set(dados as Crianca[])
    })
  }
}
