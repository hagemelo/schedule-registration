import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CandidatoEntity } from '../entities/candidato.entity';
import { CandidatoData } from '@domain/candidate.data';

@Injectable()
export class CandidatoRepository {
  constructor(
    @InjectRepository(CandidatoEntity)
    private readonly repository: Repository<CandidatoEntity>,
  ) {}

  async persist(data: CandidatoData): Promise<CandidatoData> {
    let result;
    try {
      const entity = new CandidatoEntity().fromData(data);
      const resultEntity = await this.repository.save(entity);
      result = resultEntity.toData();
    } catch (err) {
      console.log('Error..', err);
    }
    return result;
  }

  async loadAll(): Promise<CandidatoData[]> {
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
