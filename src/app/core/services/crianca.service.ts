import { inject, Injectable } from '@angular/core';
import { Firestore, collection, addDoc, query, where,collectionData } from '@angular/fire/firestore';
import { Crianca } from '../models/crianca.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CriancaService {

  private firestore: Firestore = inject(Firestore)

  async cadastroCrianca(crianca: Crianca){
    const colecao = collection(this.firestore, 'criancas')
    await addDoc(colecao,crianca);
  }
  
  listarCriancas(responsavelId: string){
    const colecao = collection(this.firestore,"criancas");
    const busca = query(colecao, where('responsavelId', '==', responsavelId));
    return collectionData(busca, {idField: 'id'}) as Observable<Crianca[]>;
  }
}
