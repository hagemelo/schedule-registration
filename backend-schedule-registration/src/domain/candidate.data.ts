import { AgendaDisponivelData } from './agenda-diponivel.data';
import { AnoEscolarEnum } from './constant/ano-escolar.enum';
import { ItinerarioInformativoEnum } from './constant/itinerario-informativo.enum';
import { PostoGraduacaoEnum } from './constant/posto-graducacao.enum';

export interface CandidatoData {
  id?: number;
  nome: string;
  cpf: string;
  cpfResponsavel: string;
  telResponsavel: string;
  emailResponsavel: string;
  nomeResponsavel: string;
  anoEscolar: AnoEscolarEnum;
  colegio: string;
  postoGraduacao: PostoGraduacaoEnum;
  itinerarioInformativo: ItinerarioInformativoEnum;
  agendaSelecionada?: AgendaDisponivelData;
}

export const CandidatoData = Symbol('CandidatoData');
