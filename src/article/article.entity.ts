import { CommentEntity } from 'src/comment/comment.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { ArticleEntityInterface } from '../../interface/article-entity-interface';

@Entity()
export class ArticleEntity
  extends BaseEntity
  implements ArticleEntityInterface
{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 255,
  })
  title: string;
  @Column({
    type: 'date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @Column({
    type: 'text',
  })
  content: string;

  @OneToMany(() => CommentEntity, (entity) => entity.articleId)
  @JoinColumn({ name: 'commentId' })
  commentId: string;
}
