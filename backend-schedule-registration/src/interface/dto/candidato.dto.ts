import { faker } from '@faker-js/faker';
import { CandidatoData } from '@domain/candidate.data';
import { ApiProperty } from '@nestjs/swagger';
import { AnoEscolarEnum } from '@domain/constant/ano-escolar.enum';
import { PostoGraduacaoEnum } from '@domain/constant/posto-graducacao.enum';
import { ItinerarioInformativoEnum } from '@domain/constant/itinerario-informativo.enum';
import { AgendaDisponivelDto } from './agenda-disponivel.dto';

export class CandidatoDto {
  constructor(data: CandidatoData) {
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

    if (id) this.id = id;
    if (nome) this.nome = nome;
    if (cpf) this.cpf = cpf;
    if (cpfResponsavel) this.cpfResponsavel = cpfResponsavel;
    if (telResponsavel) this.telResponsavel = telResponsavel;
    if (emailResponsavel) this.emailResponsavel = emailResponsavel;
    if (nomeResponsavel) this.nomeResponsavel = nomeResponsavel;
    if (anoEscolar) this.anoEscolar = anoEscolar;
    if (colegio) this.colegio = colegio;
    if (postoGraduacao) this.postoGraduacao = postoGraduacao;
    if (itinerarioInformativo)
      this.itinerarioInformativo = itinerarioInformativo;
    if (agendaSelecionada)
      this.agendaSelecionada = new AgendaDisponivelDto(agendaSelecionada);
  }

  @ApiProperty({
    description: 'Identificador do Agenda Disponivel',
    example: faker.number.int(),
  })
  id?: number;

  @ApiProperty({
    description: 'Nome completo do candidato',
    example: faker.person.fullName(),
  })
  nome: string;

  @ApiProperty({
    description: 'CPF do candidato',
    example: '123.456.789-00',
  })
  cpf: string;

  @ApiProperty({
    description: 'CPF do responsavel do candidato',
    example: '123.456.789-00',
  })
  cpfResponsavel: string;

  @ApiProperty({
    description: 'Telefone responsavel do candidato',
    example: faker.phone.number(),
  })
  telResponsavel: string;

  @ApiProperty({
    description: 'Email responsavel do candidato',
    example: faker.internet.email(),
  })
  emailResponsavel: string;

  @ApiProperty({
    description: 'Nome responsavel do candidato',
    example: faker.person.fullName(),
  })
  nomeResponsavel: string;

  @ApiProperty({
    description: 'Nome responsavel do candidato',
    enum: ['CHILD_APP_CREATED'],
  })
  anoEscolar: AnoEscolarEnum;

  @ApiProperty({
    description: 'Colegio do candidato',
    example: faker.person.fullName(),
  })
  colegio: string;

  @ApiProperty({
    description: 'Posto e Graduacao do Responsavel do candidato',
    enum: ['CIVIL'],
  })
  postoGraduacao: PostoGraduacaoEnum;

  @ApiProperty({
    description: 'Itinerario Informativo do candidato',
    enum: ['CARREIRA_MILITAR'],
  })
  itinerarioInformativo: ItinerarioInformativoEnum;

  @ApiProperty({
    description: 'Agenda Selecionada',
    isArray: false,
    type: AgendaDisponivelDto,
  })
  agendaSelecionada: AgendaDisponivelDto;
}
