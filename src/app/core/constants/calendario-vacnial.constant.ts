export interface VacinaPadrao{
    nome: string;
    dose: string;
    idadeRecomendadaMeses: number;
    descricao: string;
    reacoes: string;
}

export const CALENDARIO_VACINAL: VacinaPadrao[] = [
    // 0 Meses
    {
        nome: 'BCG',
        dose: 'Dose Única',
        idadeRecomendadaMeses: 0,
        descricao: 'Protege contra formas graves de tuberculose',
        reacoes: 'Vermelhidão, inchaço, pequena ferida local e cicatriz permanente no local da aplicação.'
    },
    {
        nome: 'Hepatite B',
        dose: 'Dose Inicial',
        idadeRecomendadaMeses: 0,
        descricao: 'Protege contra hepatite B',
        reacoes: 'Dor no local da aplicação, vermelhidão, febre baixa e irritabilidade.'
    },

    // 2 Meses
    {
        nome: 'Pentavalente (DTPa+HepB+Hib)',
        dose: '1ª Dose',
        idadeRecomendadaMeses: 2,
        descricao: 'Protege contra difteria, tétano, coqueluche, hepatite B e Hib',
        reacoes: 'Dor, vermelhidão, inchaço no local, febre, sonolência e irritabilidade.'
    },
    {
        nome: 'Poliomielite Inativada (VIP)',
        dose: '1ª Dose',
        idadeRecomendadaMeses: 2,
        descricao: 'Protege contra paralisia infantil',
        reacoes: 'Dor local, vermelhidão e febre baixa.'
    },
    {
        nome: 'Pneumocócica 10 Valente',
        dose: '1ª Dose',
        idadeRecomendadaMeses: 2,
        descricao: 'Protege contra pneumonia, meningite e otite',
        reacoes: 'Dor local, vermelhidão, febre, sonolência e irritabilidade.'
    },
    {
        nome: 'Rotavírus Humano',
        dose: '1ª Dose',
        idadeRecomendadaMeses: 2,
        descricao: 'Previne diarreias graves por rotavírus',
        reacoes: 'Irritabilidade, perda de apetite, diarreia leve ou vômitos.'
    },

    // 3 Meses
    {
        nome: 'Meningocócica C',
        dose: '1ª Dose',
        idadeRecomendadaMeses: 3,
        descricao: 'Protege contra meningite meningocócica',
        reacoes: 'Dor local, vermelhidão, febre e irritabilidade.'
    },

    // 4 Meses
    {
        nome: 'Pentavalente (DTPa+HepB+Hib)',
        dose: '2ª Dose',
        idadeRecomendadaMeses: 4,
        descricao: 'Protege contra difteria, tétano, coqueluche, hepatite B e Hib',
        reacoes: 'Dor, vermelhidão, inchaço no local, febre, sonolência e irritabilidade.'
    },
    {
        nome: 'Poliomielite Inativada (VIP)',
        dose: '2ª Dose',
        idadeRecomendadaMeses: 4,
        descricao: 'Protege contra paralisia infantil',
        reacoes: 'Dor local, vermelhidão e febre baixa.'
    },
    {
        nome: 'Pneumocócica 10 Valente',
        dose: '2ª Dose',
        idadeRecomendadaMeses: 4,
        descricao: 'Protege contra pneumonia, meningite e otite',
        reacoes: 'Dor local, vermelhidão, febre, sonolência e irritabilidade.'
    },
    {
        nome: 'Rotavírus Humano',
        dose: '2ª Dose',
        idadeRecomendadaMeses: 4,
        descricao: 'Previne diarreias graves por rotavírus',
        reacoes: 'Irritabilidade, perda de apetite, diarreia leve ou vômitos.'
    },

    // 5 Meses
    {
        nome: 'Meningocócica C',
        dose: '2ª Dose',
        idadeRecomendadaMeses: 5,
        descricao: 'Protege contra meningite meningocócica',
        reacoes: 'Dor local, vermelhidão, febre e irritabilidade.'
    },

    // 6 Meses
    {
        nome: 'Pentavalente (DTPa+HepB+Hib)',
        dose: '3ª Dose',
        idadeRecomendadaMeses: 6,
        descricao: 'Protege contra difteria, tétano, coqueluche, hepatite B e Hib',
        reacoes: 'Dor, vermelhidão, inchaço no local, febre, sonolência e irritabilidade.'
    },
    {
        nome: 'Poliomielite Inativada (VIP)',
        dose: '3ª Dose',
        idadeRecomendadaMeses: 6,
        descricao: 'Protege contra paralisia infantil',
        reacoes: 'Dor local, vermelhidão e febre baixa.'
    },

    // 9 Meses
    {
        nome: 'Febre Amarela',
        dose: '1ª Dose',
        idadeRecomendadaMeses: 9,
        descricao: 'Protege contra febre amarela',
        reacoes: 'Dor de cabeça, febre, dores musculares e sensibilidade no local.'
    },

    // 12 Meses
    {
        nome: 'Tríplice Viral (SRC)',
        dose: '1ª Dose',
        idadeRecomendadaMeses: 12,
        descricao: 'Protege contra sarampo, caxumba e rubéola',
        reacoes: 'Febre, manchas vermelhas na pele e irritabilidade entre 5 e 12 dias após a vacinação.'
    },
    {
        nome: 'Pneumocócica 10 Valente',
        dose: 'Reforço',
        idadeRecomendadaMeses: 12,
        descricao: 'Protege contra pneumonia, meningite e otite',
        reacoes: 'Dor local, vermelhidão, febre, sonolência e irritabilidade.'
    },
    {
        nome: 'Meningocócica C',
        dose: 'Reforço',
        idadeRecomendadaMeses: 12,
        descricao: 'Protege contra meningite meningocócica',
        reacoes: 'Dor local, vermelhidão, febre e irritabilidade.'
    },

    // 15 Meses
    {
        nome: 'DTP (Tríplice Bacteriana)',
        dose: '1º Reforço',
        idadeRecomendadaMeses: 15,
        descricao: 'Reforço contra difteria, tétano e coqueluche',
        reacoes: 'Dor local, febre, irritabilidade e sonolência.'
    },
    {
        nome: 'Poliomielite Oral (VOP)',
        dose: '1º Reforço',
        idadeRecomendadaMeses: 15,
        descricao: 'Reforço contra poliomielite',
        reacoes: 'Reações são raras; pode ocorrer desconforto gastrointestinal leve.'
    },
    {
        nome: 'Hepatite A',
        dose: 'Dose Única',
        idadeRecomendadaMeses: 15,
        descricao: 'Protege contra hepatite A',
        reacoes: 'Dor local, vermelhidão, febre baixa e mal-estar.'
    },
    {
        nome: 'Tetraviral (SRC + Varicela)',
        dose: 'Dose Única',
        idadeRecomendadaMeses: 15,
        descricao: 'Protege contra sarampo, caxumba, rubéola e varicela',
        reacoes: 'Febre, irritabilidade, manchas vermelhas e erupções semelhantes à catapora.'
    },

    // 4 Anos
    {
        nome: 'DTP (Tríplice Bacteriana)',
        dose: '2º Reforço',
        idadeRecomendadaMeses: 48,
        descricao: 'Reforço contra difteria, tétano e coqueluche',
        reacoes: 'Dor local, febre, irritabilidade e sonolência.'
    },
    {
        nome: 'Poliomielite Oral (VOP)',
        dose: '2º Reforço',
        idadeRecomendadaMeses: 48,
        descricao: 'Reforço contra poliomielite',
        reacoes: 'Reações são raras; pode ocorrer desconforto gastrointestinal leve.'
    },
    {
        nome: 'Varicela',
        dose: '2ª Dose',
        idadeRecomendadaMeses: 48,
        descricao: 'Protege contra catapora',
        reacoes: 'Febre leve, vermelhidão local e pequenas erupções cutâneas.'
    },
    {
        nome: 'Febre Amarela',
        dose: 'Reforço',
        idadeRecomendadaMeses: 48,
        descricao: 'Reforço contra febre amarela',
        reacoes: 'Dor de cabeça, febre, dores musculares e sensibilidade no local.'
    }
];
