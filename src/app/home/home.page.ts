import { Component, inject, OnInit, signal } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCardSubtitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonList,
  IonButton,
  IonChip,
  IonCardContent,
  IonLabel,
  IonListHeader,
  IonIcon,
  IonItem,
} from '@ionic/angular/standalone';
import { Crianca } from '../core/models/crianca.model';
import { CriancaService } from '../core/services/crianca.service';
import { AuthService } from '../core/services/auth.service';
import { DatePipe } from '@angular/common';
import { Auth, authState } from '@angular/fire/auth';
import { of, switchMap } from 'rxjs';
import { RouterLink } from '@angular/router';
import { Campanha, CampanhaService } from '../core/services/campanha.service';
import { addIcons } from 'ionicons';
import { mapOutline, arrowForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonItem,
    IonIcon,
    IonListHeader,
    IonLabel,
    IonCardContent,
    IonChip,
    IonButton,
    IonList,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonCardSubtitle,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    DatePipe,
    RouterLink,
  ],
})
export class HomePage implements OnInit {
  public criancas = signal<Crianca[]>([]);
  public campanhas = signal<Campanha[]>([]);
  private criancaService = inject(CriancaService);
  private authService = inject(AuthService);
  private auth = inject(Auth);
  private campanhaService = inject(CampanhaService);

  constructor() {
    addIcons({ mapOutline, arrowForwardOutline });
  }

  ngOnInit() {
    this.campanhaService.listarCampanhasAtivas().subscribe((dados) => {
      this.campanhas.set(dados);
    });
    this.listarDados();
  }

  listarDados() {
    authState(this.auth)
      .pipe(
        switchMap((usuario) => {
          if (usuario) {
            return this.criancaService.listarCriancas(usuario.uid);
          } else {
            return of([]);
          }
        }),
      )
      .subscribe((dados) => {
        this.criancas.set(dados as Crianca[]);
      });
  }

  buscarUbsMaisProxima() {
    const query = encodeURIComponent('Centro de Saúde UBS');
    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;

    window.open(url, '_system');
  }
}
