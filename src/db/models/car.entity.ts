import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

import User from './user.entity';

@ObjectType()
@Entity({ name: 'cars' })
export default class Car {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  model: string;

  @Field()
  @Column()
  year: number;

  @Field()
  @Column({ name: 'user_id' })
  userId: number;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Field(() => User)
  author: User;

  // Associations
  @ManyToOne(() => User, (user) => user.carConnection, { primary: true })
  @JoinColumn({ name: 'user_id' })
  userConnection: Promise<User>;
}
