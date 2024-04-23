import { CandidatoData } from './candidate.data';

export interface AgendaDisponivelData {
  id?: number;
  dia: string;
  hora: string;
  candidate?: CandidatoData;
}

export const AgendaDisponivelData = Symbol('AgendaDisponivelData');
