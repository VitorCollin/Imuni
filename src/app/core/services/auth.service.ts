import { inject, Injectable, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, user, User } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth);
  public usuarioAtual = signal<User | null | undefined>(undefined);

  constructor(){
    user(this.auth).subscribe((user) => {
      this.usuarioAtual.set(user);
    })
  }

  logout(){
    return signOut(this.auth);
  }

  cadastrar(email: string, senha: string){
    return createUserWithEmailAndPassword(this.auth, email, senha);
  }

  login(email: string, senha: string){
    return signInWithEmailAndPassword(this.auth, email, senha);
  }
}
