import { Comment } from './comment';
import { Image } from './image';

export class User {
    id: string;
    firstName: string;
    lastName: string;
    description: string;
    email: string;
    createdOn: Date;
    image: Image;
    comments: Comment[];
}