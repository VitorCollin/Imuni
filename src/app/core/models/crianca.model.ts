export interface VacinaAplicada{
    id?: string;
    vacinaId: string;
    nomeVacina: string;
    dataAplicacao: Date;
    lote?: string;
    local?: string;
}

export interface Crianca{
    uid?: string;
    responsavelId: string;
    nome: string;
    dataNascimento: Date;
    genero?: 'M' | 'F' | 'Outro'
}