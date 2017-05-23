import { Comment } from './comment';

export class Post {
    id: string;
    imageSrc: string;
    title: string;
    description: string;
    createdOn: Date;
    content: string;
    comments: Comment[];
}