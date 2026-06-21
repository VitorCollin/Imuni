import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { CriancaService } from 'src/app/core/services/crianca.service';
import { Vacina } from 'src/app/core/models/vanica.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-detalhes-crianca',
  templateUrl: './detalhes-crianca.page.html',
  styleUrls: ['./detalhes-crianca.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetalhesCriancaPage implements OnInit {
  private route = inject(ActivatedRoute);
  private criancaService = inject(CriancaService);
  public vacinas = signal<Vacina[]>([]);

  constructor() { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        console.log('Id Capturado da URL', id)
        if(id){
          return this.criancaService.listarVacinasCrianca(id);
        }
        return [];
      })
    ).subscribe(dados => {
      console.log('Vacinas retornadas do Firestore', dados)
      this.vacinas.set(dados)
    });
  }

  obterStatusAtual(vacina: Vacina): 'Pendente' | 'Aplicada' | 'Atrasada'{ 
    if(vacina.status === 'Aplicada'){
      return'Aplicada';
    }
    const hojeStr = new Date().toISOString().split('T')[0];
    if(vacina.dataPrevista < hojeStr){
      return'Atrasada';
    }
    return'Pendente';
  }
}
