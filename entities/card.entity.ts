import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Card {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column({type: "text",nullable: true})
    description?: string;

    @Column({type: "text",nullable: true})
    postion!: number;

    @Column({default: false})
    complited: boolean = false;

    @Column({nullable: true})
    dueDate?: Date;

    @Column()
    listId?: number;

    @CreateDateColumn()
    readonly createdAt?: Date;

    @UpdateDateColumn()
    readonly updateAt?: Date;

}