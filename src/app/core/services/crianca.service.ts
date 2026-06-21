import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  query,
  where,
  collectionData,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import { Crianca } from '../models/crianca.model';
import { Observable } from 'rxjs';
import { CALENDARIO_VACINAL } from '../constants/calendario-vacnial.constant';
import { Vacina } from '../models/vacina.model';

@Injectable({
  providedIn: 'root',
})
export class CriancaService {
  private firestore: Firestore = inject(Firestore);

  private calcularDataPrevista(
    dataNascimento: string,
    mesesParaSomar: number,
  ): string {
    const data = new Date(dataNascimento + 'T00:00:00');
    data.setMonth(data.getMonth() + mesesParaSomar);
    return data.toISOString().split('T')[0];
  }

  async cadastroCrianca(crianca: Crianca) {
    const colecao = collection(this.firestore, 'criancas');
    const docRef = await addDoc(colecao, crianca);

    for (const vacina of CALENDARIO_VACINAL) {
      const dataPrevista = this.calcularDataPrevista(
        crianca.dataNascimento,
        vacina.idadeRecomendadaMeses,
      );

      const novaVacina: Vacina = {
        nome: vacina.nome,
        dose: vacina.dose,
        idadeRecomendadaMeses: vacina.idadeRecomendadaMeses,
        dataPrevista: dataPrevista,
        status: 'Pendente',
        descricao: vacina.descricao,
        reacoes: vacina.reacoes,
      };
      const subColecaoVacinas = collection(
        this.firestore,
        'criancas',
        docRef.id,
        'vacinas',
      );
      await addDoc(subColecaoVacinas, novaVacina);
    }
  }

  listarCriancas(responsavelId: string) {
    const colecao = collection(this.firestore, 'criancas');
    const busca = query(colecao, where('responsavelId', '==', responsavelId));
    return collectionData(busca, { idField: 'uid' }) as Observable<Crianca[]>;
  }

  listarVacinasCrianca(criancaId: string): Observable<Vacina[]> {
    const colecaoVacinas = collection(
      this.firestore,
      'criancas',
      criancaId,
      'vacinas',
    );
    return collectionData(colecaoVacinas, { idField: 'id' }) as Observable<
      Vacina[]
    >;
  }

  async marcarComoAplicada(
    criancaId: string,
    vacinaId: string,
    dataAplicacao: string,
  ): Promise<void> {
    const docVacinaRef = doc(
      this.firestore,
      'criancas',
      criancaId,
      'vacinas',
      vacinaId,
    );

    await updateDoc(docVacinaRef, {
      status: 'Aplicada',
      dataAplicacao: dataAplicacao,
    });
  }
}
