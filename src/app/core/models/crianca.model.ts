export interface Crianca{
    uid?: string;
    responsavelId: string;
    nome: string;
    dataNascimento: string;
    genero?: 'M' | 'F' | 'Outro'
}