export interface CommentEntityInterface {
  id: string;
  userId: string;
  articleId: string;
  comment: string;
  createAt: Date;
}
