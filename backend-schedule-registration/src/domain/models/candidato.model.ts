import { AnoEscolarEnum } from '@domain/constant/ano-escolar.enum';
import { ItinerarioInformativoEnum } from '@domain/constant/itinerario-informativo.enum';
import { PostoGraduacaoEnum } from '@domain/constant/posto-graducacao.enum';
import { AgendaDisponivelModel } from './agenda-disponivel.model';
import { CandidatoData } from '@domain/candidate.data';

export class CandidatoModel {
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
  agendaSelecionada?: AgendaDisponivelModel;

  constructor(params: Partial<CandidatoModel> | CandidatoData) {
    if (params.id) this.id = params.id;
    this.nome = params.nome || '';
    this.cpf = params.cpf || '';
    this.cpfResponsavel = params.cpfResponsavel || '';
    this.emailResponsavel = params.emailResponsavel || '';
    this.nomeResponsavel = params.nomeResponsavel || '';
    this.anoEscolar = params.anoEscolar || AnoEscolarEnum._6O_do_EF;
    this.colegio = params.colegio || '';
    this.postoGraduacao = params.postoGraduacao || PostoGraduacaoEnum.CIVIL;
    this.itinerarioInformativo =
      params.itinerarioInformativo ||
      ItinerarioInformativoEnum.CARREIRA_MILITAR;
    if (params.agendaSelecionada)
      this.agendaSelecionada = params.agendaSelecionada;
  }
}
