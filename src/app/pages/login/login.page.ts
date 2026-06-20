import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonButton, IonLabel, IonRouterLink } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonLabel, IonButton, IonItem, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonRouterLink]
})
export class LoginPage{
  private fb = inject(FormBuilder);
  private authSerivce = inject(AuthService);
  private router = inject(Router);

  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6)]]
  });

  async aoEntrar(){
    if(this.loginForm.valid){
      const {email, senha } = this.loginForm.value;

      try{
        await this.authSerivce.login(email, senha);
        console.log('Logado com sucesso');
        this.router.navigate(['/home']);
      }catch (erro){
        console.error('Erro ao fazer login:', erro);
        // TODO: Fazer uma alerta visual para o responsavel 
      }
    }
  }
}
