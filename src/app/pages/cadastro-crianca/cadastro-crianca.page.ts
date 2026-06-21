import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { AlertController, IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonDatetimeButton, IonModal, IonDatetime, IonButton, IonInput } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { Crianca } from 'src/app/core/models/crianca.model';
import { CriancaService } from 'src/app/core/services/crianca.service';

@Component({
  selector: 'app-cadastro-crianca',
  templateUrl: './cadastro-crianca.page.html',
  styleUrls: ['./cadastro-crianca.page.scss'],
  standalone: true,
  imports: [IonInput, IonButton, IonDatetime, IonModal, IonDatetimeButton, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class CadastroCriancaPage {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private alertCtrl = inject(AlertController);
  private criancaService = inject(CriancaService);

  public criancaForm: FormGroup = this.fb.group({
    nome: ['',[Validators.required]],
    dtNascimento: [new Date().toISOString().split('T')[0], [Validators.required]]
  });

  get nomeCtrl (){return this.criancaForm.get('nome') as FormControl;}
  get dtNascimentoCtrl (){return this.criancaForm.get('dtNascimento') as FormControl;}

  async exibirAlerta(titulo: string, mensagem: string){
    const alert = await this.alertCtrl.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

  async salvarCrianca(){
    if(this.criancaForm.valid){
      const nome = this.criancaForm.value.nome;
      const dtNascimento = this.criancaForm.value.dtNascimento;
      const usuarioId = this.authService.usuarioAtual()?.uid;

      if(!usuarioId){
        console.error('Usuario não autenticado')
        return;
      }
      
      const novaCrianca:Crianca = {
        nome: nome || '',
        dataNascimento: dtNascimento || '',
        responsavelId: usuarioId
      };

      try{
        await this.criancaService.cadastroCrianca(novaCrianca);
        this.exibirAlerta('Sucesso!', 'Criança cadastrada com sucesso!')
        this.router.navigate(['/home']);
      }catch(erro){
        console.error("Erro ao cadastrar criança", erro)
        this.exibirAlerta('Falha', 'Falha as cadastrar criança, tente novamente')
      }
    }
  }
}
