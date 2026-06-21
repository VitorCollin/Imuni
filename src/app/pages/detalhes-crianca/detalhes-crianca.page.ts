import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, AlertController } from '@ionic/angular/standalone';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CriancaService } from 'src/app/core/services/crianca.service';
import { Vacina } from 'src/app/core/models/vacina.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-detalhes-crianca',
  templateUrl: './detalhes-crianca.page.html',
  styleUrls: ['./detalhes-crianca.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class DetalhesCriancaPage implements OnInit {
  private route = inject(ActivatedRoute);
  private criancaService = inject(CriancaService);
  private alertController = inject(AlertController);
  public vacinas = signal<Vacina[]>([]);
  public idCrianca: string | null = '';

  constructor() { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        console.log('Id Capturado da URL', id)
        if(id){
          this.idCrianca = id
          return this.criancaService.listarVacinasCrianca(id);
        }
        return [];
      })
    ).subscribe(dados => {
      console.log('Vacinas retornada do Firestore', dados)
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

  async abriConfirmacaoAplicacao(vacina: Vacina){
    const idCriancaAtual = this.route.snapshot.paramMap.get('id')
    
    if(!idCriancaAtual){
      console.error('Não foi possivel encontrar o ID da criança na URL');
      return;
    }

    const hoje = new Date();
    const hojeStr = hoje.toLocaleDateString('sv-SE');

    const alerta = await this.alertController.create({
      header: `Aplicar ${vacina.nome}`,
      subHeader: vacina.dose,
      message: 'Confirme a data em que a vacina foi aplicada:',
      inputs:[
        {
          name: 'dataAplicacao',
          type: 'date',
          value: hojeStr,
          max: hojeStr
        }
      ],
      buttons:[
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          handler: async (dadosDoFormulario) => {
            const dataEscolhida = dadosDoFormulario.dataAplicacao;
            if(!dataEscolhida || !vacina.id) return false

            await this.criancaService.marcarComoAplicada(idCriancaAtual, vacina.id, dataEscolhida);
            return true;
          }
        }
      ]
    });
    await alerta.present();
  }
}
