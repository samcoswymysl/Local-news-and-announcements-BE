import { ArticleEntity } from 'src/article/article.entity';
import { UserEntity } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CommentEntityInterface } from '../../interface/comment-entity-interface';

@Entity()
export class CommentEntity
  extends BaseEntity
  implements CommentEntityInterface
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
  })
  comment: string;

  @Column({
    type: 'date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @ManyToOne(() => UserEntity, (entity) => entity.id)
  userId: string;

  @ManyToOne(() => ArticleEntity, (entity) => entity.commentId)
  articleId: string;
}
