import { IsDate, IsNumber, IsString } from 'class-validator';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import config from '../config';

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
    this.quota = config.dailyQuota;
    this.dateCreated = new Date();
    this.dateUpdated = new Date();
  }

  public updateDate() {
    this.dateUpdated = new Date();
  }

  public resetUsage() {
    this.quota = config.dailyQuota;
  }
}
