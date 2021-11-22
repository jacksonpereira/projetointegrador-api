import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from 'typeorm';

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

    @Column({nullable: false, type: "varchar", width: 60})
    telefone: string;

    @Column({nullable: false, type: "varchar", width: 60})
    email: string;

    @Column({nullable: true, type: "varchar", width: 60})
    site: string;

    @Column({nullable: false, type: "varchar", width: 14})
    cnpj: string;

    @Column({nullable: false, type: "varchar", width: 500})
    descricao: string;
}
