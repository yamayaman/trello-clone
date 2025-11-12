import { Column, Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class List{
    @PrimaryColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    postion!: number;

    @CreateDateColumn()
    readonly createdAt?: Date;
    
    @UpdateDateColumn()
    readonly updateAt?: Date;
}