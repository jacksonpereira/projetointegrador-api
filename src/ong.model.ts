import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn} from 'typeorm';
import { Contato } from './contato.model';
import { DadosBancarios } from './dadosBancarios.model';

@Entity('ong')
export class ONG extends BaseEntity {

    constructor(){
        super();
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, type: "varchar", width: 60})
    nome: string;

    @Column({nullable: false, type: "varchar", width: 80})
    endereco: string;

    @Column({nullable: false, type: "varchar", width: 10})
    numero: string;

    @Column({nullable: false, type: "varchar", width: 8})
    cep: string;

    @Column({nullable: false, type: "varchar", width: 60})
    bairro: string;

    @Column({nullable: false, type: "varchar", width: 60})
    cidade: string;

    @Column({nullable: false, type: "varchar", width: 60})
    estado: string;

    @Column({nullable: false, type: "varchar", width: 60})
    pais: string;

    @OneToOne(() => Contato, contato => contato.id, {eager:true, cascade:["insert","update","remove","soft-remove","recover"]})
    @JoinColumn()
    contato: Contato

    @OneToOne(() => DadosBancarios, dadosBancarios => dadosBancarios.id, {eager:true, cascade:["insert","update","remove","soft-remove","recover"]})
    @JoinColumn()
    dadosBancarios: DadosBancarios

    @Column({nullable: false, type: "varchar", width: 14})
    cnpj: string;

    @Column({nullable: false, type: "varchar", width: 500})
    descricao: string;
}
