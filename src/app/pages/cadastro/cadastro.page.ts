import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonInput,
  AlertController,
} from '@ionic/angular/standalone';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [
    IonInput,
    IonItem,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class CadastroPage {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private alertCrtl = inject(AlertController);

  public cadastroForm: FormGroup = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(1)]],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6)]],
  });

  get nomeCtrl() {
    return this.cadastroForm.get('nome') as FormControl;
  }
  get emailCtrl() {
    return this.cadastroForm.get('email') as FormControl;
  }
  get senhaCtrl() {
    return this.cadastroForm.get('senha') as FormControl;
  }

  async exibirAlerta(titulo: string, mensagem: string) {
    const alert = await this.alertCrtl.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async aoCadastrar() {
    if (this.cadastroForm.valid) {
      const email = this.cadastroForm.value.email || '';
      const senha = this.cadastroForm.value.senha || '';

      try {
        await this.authService.cadastrar(email, senha);
        console.log('Cadastro feito com sucesso');
        await this.exibirAlerta(
          'Sucesso',
          'A conta de responsável foi criada com sucesso. Seja bem-vindo ao Imuni!',
        );
        this.router.navigate(['/login']);
      } catch (erro: any) {
        console.log('Erro ao fazer o cadastro', erro);
        let mensagemErro =
          'Não foi possivel realizar o cadastro. Tente novamente.!';

        if (erro.code === 'auth/email-already-in-use') {
          mensagemErro = 'Este E-mail já esta sendo utilizado';
        } else if (erro.code === 'auth/weak-password') {
          mensagemErro = 'A senha escolhida é muito fraca.';
        }
        await this.exibirAlerta('Ops!', mensagemErro);
      }
    }
  }
}
