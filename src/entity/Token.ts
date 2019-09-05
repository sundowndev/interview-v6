import { IsDate, IsNumber, IsString } from 'class-validator';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Token {
  @ObjectIdColumn()
  public id!: ObjectID;

  @Column()
  @IsString()
  public email!: string;

  @Column()
  @IsString()
  public token!: string;

  @Column()
  @IsNumber()
  public quota: number;

  @Column()
  @IsDate()
  public dateCreated: Date;

  @Column()
  @IsDate()
  public dateUpdated: Date;

  constructor() {
    this.quota = 80000;
    this.dateCreated = new Date();
    this.dateUpdated = new Date();
  }
}
