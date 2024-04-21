import { CandidateData } from './candidate.data';

export interface AgendaDisponivelData {
  id?: string;
  dia: string;
  hora: string;
  candidate?: CandidateData;
}

export const AgendaDisponivelData = Symbol('AgendaDisponivelData');
