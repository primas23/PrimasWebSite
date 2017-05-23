import { Comment } from './comment';
import { Image } from './image';

export class Post {
    id: string;
    image: Image;
    title: string;
    description: string;
    createdOn: Date;
    content: string;
    comments: Comment[];
}