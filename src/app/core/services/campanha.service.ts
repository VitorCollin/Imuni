import { inject, Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Campanha {
  id?: string;
  titulo: string;
  descricao: string;
  dataInicio: string;
  dataFim: string;
  locais: string;
  linkOficial?: string;
}
@Injectable({
  providedIn: 'root',
})
export class CampanhaService {
  private firestore = inject(Firestore);

  listarCampanhasAtivas(): Observable<Campanha[]> {
    const colecao = collection(this.firestore, 'campanhas');
    const hojeStr = new Date().toISOString().split('T')[0];

    const busca = query(colecao, where('dataFim', '>=', hojeStr));

    return collectionData(busca, { idField: 'id' }) as Observable<Campanha[]>;
  }
}
