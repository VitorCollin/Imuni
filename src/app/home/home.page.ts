import { Component, inject, OnInit, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardSubtitle, IonCard, IonCardHeader, IonCardTitle, IonList } from '@ionic/angular/standalone';
import { Crianca } from '../core/models/crianca.model';
import { CriancaService } from '../core/services/crianca.service';
import { AuthService } from '../core/services/auth.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonList, IonCardTitle, IonCardHeader, IonCard, IonCardSubtitle, IonHeader, IonToolbar, IonTitle, IonContent, DatePipe],
})
export class HomePage implements OnInit {
  public criancas = signal<Crianca[]>([]);
  private criancaService = inject(CriancaService);
  private authService = inject(AuthService);

  ngOnInit(){
    this.listarDados();
  }

  listarDados(){
    const respId = this.authService.usuarioAtual()?.uid;

    if(respId){
      this.criancaService.listarCriancas(respId).subscribe(dados =>{
        this.criancas.set(dados);
      })
    }
  }
}
