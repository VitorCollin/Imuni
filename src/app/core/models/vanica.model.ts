export interface Vacina{
    id?: string;
    nome: string;
    dose: string;
    idadeRecomendadaMeses: number
    dataPrevista: string;
    dataAplicacao?: string;
    status: 'Pendente' | 'Aplicada' | 'Atrasada'
    lote?: string;
    unidadeSaude?: string;
}