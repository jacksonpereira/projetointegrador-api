import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne} from 'typeorm';
import { ONG } from './ong.model';

@Entity('dadosbancarios')
export class DadosBancarios extends BaseEntity {

    constructor(){
        super();
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true, type: "varchar", width: 15})
    agencia: string;

    @Column({nullable: true, type: "varchar", width: 15})
    conta: string;

    @Column({nullable: true, type: "varchar", width: 15})
    tipo_pix: string;

    @Column({nullable: true, type: "varchar", width: 15})
    chave_pix: string;

    @OneToOne(() => ONG, ong => ong.dadosBancarios)
    ong: ONG;
}
