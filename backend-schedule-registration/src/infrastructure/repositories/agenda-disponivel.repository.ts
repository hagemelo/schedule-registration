import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AgendaDisponivelEntity } from '../entities/agenda-disponivel.entity';
import { Repository } from 'typeorm';
import { AgendaDisponivelData } from '@domain/agenda-diponivel.data';

type ParamsFindAgendaDisponivelByDiaAndHora = {
  dia: string;
  hora: string;
};

@Injectable()
export class AgendaDisponivelRepository {
  constructor(
    @InjectRepository(AgendaDisponivelEntity)
    private readonly repository: Repository<AgendaDisponivelEntity>,
  ) {}

  async persist(data: AgendaDisponivelData): Promise<AgendaDisponivelData> {
    let result;
    try {
      const entity = new AgendaDisponivelEntity().fromData(data);
      const persistedEntity = await this.repository.save(entity);
      result = persistedEntity.toData();
    } catch (err) {
      console.log('Error..', err);
    }
    return result;
  }

  async findAgendaDisponivelByDiaAndHora(
    params: ParamsFindAgendaDisponivelByDiaAndHora,
  ): Promise<AgendaDisponivelData> {
    let result;
    const { dia, hora } = params;
    try {
      result = await this.repository.findOne({
        relations: [],
        where: { dia, hora },
      });
    } catch (err) {
      console.log('Error..', err);
    }
    return result;
  }

  async loadAll(): Promise<AgendaDisponivelData[]> {
    let result = [];
    try {
      const entities = await this.repository.find({});
      result = entities.map((entity) => entity.toData());
    } catch (err) {
      console.log('Error..', err);
    }
    return result;
  }
}
