import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntityInterface } from '../../interface/user-entity-interface';
import { CommentEntity } from '../comment/comment.entity';

@Entity()
export class UserEntity extends BaseEntity implements UserEntityInterface {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 42,
    nullable: false,
  })
  name: string;

  @Column({
    length: 70,
    nullable: true,
  })
  lastName: string;

  @Column()
  age: number;

  @Column({
    length: 255,
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    length: 60,
  })
  password: string;

  @OneToMany(() => CommentEntity, (entity) => entity.articleId)
  @JoinColumn({ name: 'commentId' })
  commentId: string;
}
