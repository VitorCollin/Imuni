import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSpinner,
  IonLabel,
  IonAccordion,
  IonItem,
  IonIcon,
  IonAccordionGroup,
  IonListHeader,
  IonList,
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { VacinaService } from 'src/app/core/services/vacina.service';
import { Vacina } from 'src/app/core/models/vacina.model';

@Component({
  selector: 'app-detalhes-vacina',
  templateUrl: './detalhes-vacina.page.html',
  styleUrls: ['./detalhes-vacina.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonListHeader,
    IonAccordionGroup,
    IonIcon,
    IonItem,
    IonAccordion,
    IonLabel,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class DetalhesVacinaPage implements OnInit {
  private route = inject(ActivatedRoute);
  private vacinaService = inject(VacinaService);
  public vacina = signal<Vacina | null>(null);

  constructor() {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const criancaId = params.get('idCrianca');
          const id = params.get('id');
          console.log('Id Capturado da URL', id);
          console.log('Id da criança capturado:', criancaId);
          if (id && criancaId) {
            return this.vacinaService.listarVacina(criancaId, id);
          }
          return [];
        }),
      )
      .subscribe((dados) => {
        console.log('Vacina retornadas do Firestore', dados);
        this.vacina.set(dados);
      });
  }
}
