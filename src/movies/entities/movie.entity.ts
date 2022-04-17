import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    title: string;
 
    @Column({ length: 255 })
    description: string;

    @Column() 
    year: Date;
}
