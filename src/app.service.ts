import { Injectable } from '@nestjs/common';
import { Repository, getConnection, Like, ILike } from 'typeorm';
import { ONG } from './ong.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Contato } from './contato.model';
import { DadosBancarios } from './dadosBancarios.model';

@Injectable()
export class AppService {

  @InjectRepository(ONG) private ongRO: Repository<ONG>
  @InjectRepository(DadosBancarios) private dadosBancariosRO: Repository<DadosBancarios>
  @InjectRepository(Contato) private contatoRO: Repository<Contato>

  async createONG(ong:ONG): Promise<ONG> {
    let saved:ONG = await this.ongRO.save(ong);
    return saved;
  }

  async getONGs(): Promise<ONG[]> {
    let ongs:ONG[] = await this.ongRO.find({order: {id: "DESC"}, skip: 0, take: 3});
    return ongs;
  }

  async getOngByNomeAndCidade(nome?:string, cidade?:string): Promise<ONG[]> {
    let ongs:ONG[] = await this.ongRO.find({nome: ILike(`%${nome}%`), cidade: ILike(`%${cidade}%`)});
    return ongs;
  }
}
