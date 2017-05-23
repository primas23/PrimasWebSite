import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { Post } from '../models/post';

@Injectable()
export class PostService {
    posts: Post[];

    constructor(private http: Http) {
        let first = new Post()
        first.id = '1';
        first.imageSrc = './images/woods.jpg';
        first.title = 'TITLE HEADING';
        first.description = 'Title description';
        first.createdOn = new Date('April 7, 2014');
        first.content = 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.';
        first.comments = [];

        let second = new Post()
        second.id = '2';
        second.imageSrc = './images/woods.jpg';
        second.title = 'TITLE HEADING 2';
        second.description = 'Title description 2';
        second.createdOn = new Date('April 7, 2014');
        second.content = 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.';
        second.comments = [];

        this.posts = [first, second];
    }

    getPostSummaries() {
        //return this.http.get('api/Post/GetPostSummaries')
        //    .map(r => r.json() as Post[])
        //    .toPromise();       


        return this.posts;
    }

    getPostDetails(id: string) {
        //return this.http.get(`api/Post/GetPostDetail/${id}`)
        //    .map(r => r.json() as Post)
        //    .toPromise();

        let first = new Post()
        first.id = '1';
        first.imageSrc = './images/woods.jpg';
        first.title = 'TITLE HEADING';
        first.description = 'Title description';
        first.createdOn = new Date('April 7, 2014');
        first.content = 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.';
        first.comments = [];

        return this.posts.find(p => p.id === id);
    }
}