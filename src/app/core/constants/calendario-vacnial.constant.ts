export interface VacinaPadrao{
    nome: string;
    dose: string;
    idadeRecomendadaMeses: number;
}

export const CALENDARIO_VACINAL: VacinaPadrao[] = [
    // 0 Meses
    {nome: 'BCG', dose: 'Dose Única', idadeRecomendadaMeses: 0 },
    {nome: 'Hepatite B', dose: 'Dose Inicial', idadeRecomendadaMeses:0},

    // 2 Meses
    { nome: 'Pentavalente (DTPa+HepB+Hib)', dose: '1ª Dose', idadeRecomendadaMeses: 2 },
    { nome: 'Poliomielite Inativada (VIP)', dose: '1ª Dose', idadeRecomendadaMeses: 2 },
    { nome: 'Pneumocócica 10 Valente', dose: '1ª Dose', idadeRecomendadaMeses: 2 },
    { nome: 'Rotavírus Humano', dose: '1ª Dose', idadeRecomendadaMeses: 2 },

    // 3 Meses
    { nome: 'Meningocócica C', dose: '1ª Dose', idadeRecomendadaMeses: 3 },

    // 4 Meses
    { nome: 'Pentavalente (DTPa+HepB+Hib)', dose: '2ª Dose', idadeRecomendadaMeses: 4 },
    { nome: 'Poliomielite Inativada (VIP)', dose: '2ª Dose', idadeRecomendadaMeses: 4 },
    { nome: 'Pneumocócica 10 Valente', dose: '2ª Dose', idadeRecomendadaMeses: 4 },
    { nome: 'Rotavírus Humano', dose: '2ª Dose', idadeRecomendadaMeses: 4 },

    // 5 Meses
    { nome: 'Meningocócica C', dose: '2ª Dose', idadeRecomendadaMeses: 5 },

    // 6 Meses
    { nome: 'Pentavalente (DTPa+HepB+Hib)', dose: '3ª Dose', idadeRecomendadaMeses: 6 },
    { nome: 'Poliomielite Inativada (VIP)', dose: '3ª Dose', idadeRecomendadaMeses: 6 },

    // 9 Meses
    { nome: 'Febre Amarela', dose: '1ª Dose', idadeRecomendadaMeses: 9 },

    // 12 Meses (1 Ano)
    { nome: 'Tríplice Viral (SRC)', dose: '1ª Dose', idadeRecomendadaMeses: 12 },
    { nome: 'Pneumocócica 10 Valente', dose: 'Reforço', idadeRecomendadaMeses: 12 },
    { nome: 'Meningocócica C', dose: 'Reforço', idadeRecomendadaMeses: 12 },

    // 15 Meses (1 Ano e 3 meses)
    { nome: 'DTP (Tríplice Bacteriana)', dose: '1º Reforço', idadeRecomendadaMeses: 15 },
    { nome: 'Poliomielite Oral (VOP)', dose: '1º Reforço', idadeRecomendadaMeses: 15 },
    { nome: 'Hepatite A', dose: 'Dose Única', idadeRecomendadaMeses: 15 },
    { nome: 'Tetraviral (SRC + Varicela)', dose: 'Dose Única', idadeRecomendadaMeses: 15 },

    // 4 Anos
    { nome: 'DTP (Tríplice Bacteriana)', dose: '2º Reforço', idadeRecomendadaMeses: 48 },
    { nome: 'Poliomielite Oral (VOP)', dose: '2º Reforço', idadeRecomendadaMeses: 48 },
    { nome: 'Varicela', dose: '2ª Dose', idadeRecomendadaMeses: 48 },
    { nome: 'Febre Amarela', dose: 'Reforço', idadeRecomendadaMeses: 48 }
];
