import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { CandidatoEntity } from './candidato.entity';
import { AgendaDisponivelData } from '@domain/agenda-diponivel.data';

@Entity('Agenda_disponivel')
export class AgendaDisponivelEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'dia', nullable: false })
  dia: string;

  @Column({ name: 'hora', nullable: false })
  hora: string;

  @OneToOne(() => CandidatoEntity, (candidate) => candidate.agendaSelecionada)
  @JoinColumn({ name: 'candidate_id' })
  candidate: Relation<CandidatoEntity>;

  public fromData(data: AgendaDisponivelData): AgendaDisponivelEntity {
    const { id, dia, hora, candidate } = data;
    this.id = id;
    this.dia = dia;
    this.hora = hora;
    this.candidate = candidate
      ? new CandidatoEntity().fromData(candidate)
      : null;
    return this;
  }

  public toData(): AgendaDisponivelData {
    const { id, dia, hora, candidate } = this;

    return {
      id,
      dia,
      hora,
      candidate: candidate ? candidate.toData() : null,
    };
  }
}
