import { inject, Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Vacina } from '../models/vacina.model';

@Injectable({
  providedIn: 'root',
})
export class VacinaService {
  private firestore: Firestore = inject(Firestore);

  listarVacina(criancaId:string, vacinaId: string): Observable<Vacina>{
    const vacina = doc(this.firestore, 'criancas' , criancaId, 'vacinas', vacinaId );
    return docData(vacina, {idField: 'id'}) as Observable<Vacina>
  }
}
