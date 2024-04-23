import { AnoEscolarEnum } from '@domain/constant/ano-escolar.enum';
import { ItinerarioInformativoEnum } from '@domain/constant/itinerario-informativo.enum';
import { PostoGraduacaoEnum } from '@domain/constant/posto-graducacao.enum';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AgendaDisponivelEntity } from './agenda-disponivel.entity';
import { CandidatoData } from '@domain/candidate.data';

@Entity('Candidato')
export class CandidatoEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'nome', nullable: false })
  nome: string;

  @Column({ name: 'cpf', nullable: false })
  cpf: string;

  @Column({ name: 'cpf_responsavel', nullable: false })
  cpfResponsavel: string;

  @Column({ name: 'tel_responsavel', nullable: false })
  telResponsavel: string;

  @Column({ name: 'email_responsavel', nullable: false })
  emailResponsavel: string;

  @Column({ name: 'nome_responsavel', nullable: false })
  nomeResponsavel: string;

  @Column({ name: 'ano_escolar', type: 'enum', enum: AnoEscolarEnum })
  anoEscolar: AnoEscolarEnum;

  @Column({ name: 'nome_responsavel', nullable: false })
  colegio: string;

  @Column({ name: 'posto_graduacao', type: 'enum', enum: PostoGraduacaoEnum })
  postoGraduacao: PostoGraduacaoEnum;

  @Column({
    name: 'itinerario_informativo',
    type: 'enum',
    enum: ItinerarioInformativoEnum,
  })
  itinerarioInformativo: ItinerarioInformativoEnum;

  @OneToOne(
    () => AgendaDisponivelEntity,
    (AgendaDisponivelEntity) => AgendaDisponivelEntity.candidate,
    { cascade: true },
  )
  agendaSelecionada: AgendaDisponivelEntity;

  public fromData(data: CandidatoData): CandidatoEntity {
    const {
      id,
      nome,
      cpf,
      cpfResponsavel,
      telResponsavel,
      emailResponsavel,
      nomeResponsavel,
      anoEscolar,
      colegio,
      postoGraduacao,
      itinerarioInformativo,
      agendaSelecionada,
    } = data;
    this.id = id;
    (this.nome = nome),
      (this.cpf = cpf),
      (this.cpfResponsavel = cpfResponsavel),
      (this.telResponsavel = telResponsavel),
      (this.emailResponsavel = emailResponsavel),
      (this.nomeResponsavel = nomeResponsavel),
      (this.anoEscolar = anoEscolar),
      (this.colegio = colegio),
      (this.postoGraduacao = postoGraduacao),
      (this.itinerarioInformativo = itinerarioInformativo),
      (this.agendaSelecionada = agendaSelecionada
        ? new AgendaDisponivelEntity().fromData(agendaSelecionada)
        : null);

    return this;
  }

  public toData(): CandidatoData {
    const {
      id,
      nome,
      cpf,
      cpfResponsavel,
      telResponsavel,
      emailResponsavel,
      nomeResponsavel,
      anoEscolar,
      colegio,
      postoGraduacao,
      itinerarioInformativo,
      agendaSelecionada,
    } = this;

    return {
      id,
      nome,
      cpf,
      cpfResponsavel,
      telResponsavel,
      emailResponsavel,
      nomeResponsavel,
      anoEscolar,
      colegio,
      postoGraduacao,
      itinerarioInformativo,
      agendaSelecionada: agendaSelecionada.toData(),
    };
  }
}
