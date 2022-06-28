import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne} from 'typeorm';
import { ONG } from './ong.model';

@Entity('contato')
export class Contato extends BaseEntity {

    constructor(){
        super();
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true, type: "varchar", width: 15})
    telefone: string;

    @Column({nullable: true, type: "varchar", width: 60})
    site: string;

    @Column({nullable: true, type: "varchar", width: 60})
    email: string;

    @OneToOne(() => ONG, ong => ong.contato)
    ong: ONG;
}
