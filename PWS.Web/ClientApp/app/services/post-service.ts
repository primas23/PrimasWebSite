import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { Post } from '../models/post';
import { Image } from '../models/image';

@Injectable()
export class PostService {
    posts: Post[];

    constructor(private http: Http) {
        let firstImage = new Image();
        firstImage.id = '1';
        firstImage.src = './images/woods.jpg';
        firstImage.alt = 'woods';
        let first = new Post();
        first.id = '1';
        first.image = firstImage;
        first.title = 'TITLE HEADING';
        first.description = 'Title description';
        first.createdOn = new Date('April 7, 2014');
        first.content = 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.';
        first.comments = [];

        let secondImage = new Image();
        secondImage.id = '2';
        secondImage.src = './images/bridge.jpg';
        secondImage.alt = 'woods';
        let second = new Post();
        second.id = '2';
        second.image = secondImage;
        second.title = 'TITLE HEADING 2';
        second.description = 'Title description 2';
        second.createdOn = new Date('April 7, 2014');
        second.content = 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.';
        second.comments = [];


        let thirdImage = new Image();
        thirdImage.id = '3';
        thirdImage.src = './images/woods.jpg';
        thirdImage.alt = 'woods';
        let third = new Post();
        third.id = '3';
        third.image = thirdImage;
        third.title = 'TITLE HEADING 3';
        third.description = 'Title description 2';
        third.createdOn = new Date('April 7, 2014');
        third.content = 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.';
        third.comments = [];


        let forthImage = new Image();
        forthImage.id = '4';
        forthImage.src = './images/bridge.jpg';
        forthImage.alt = 'woods';
        let forth = new Post();
        forth.id = '4';
        forth.image = forthImage;
        forth.title = 'TITLE HEADING 4';
        forth.description = 'Title description 2';
        forth.createdOn = new Date('April 7, 2014');
        forth.content = 'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.';
        forth.comments = [];

        this.posts = [first, second, third, forth];
    }

    getPostSummaries() {
        //return this.http.get('api/Post/GetPostSummaries')
        //    .map(r => r.json() as Post[])
        //    .toPromise();
        var postSummary = this.posts.map(p => Object.assign({}, p));
        postSummary.forEach(p => p.content = p.content.substr(0, 100));
        
        return postSummary;
    }

    getPostDetails(id: string) {
        //return this.http.get(`api/Post/GetPostDetail/${id}`)
        //    .map(r => r.json() as Post)
        //    .toPromise();
        //console.log(this.posts);
        return this.posts.find(p => p.id === id);
    }

    getPopularPosts() {
        //return this.http.get('api/Post/GetPostSummaries')
        //    .map(r => r.json() as Post[])
        //    .toPromise();
        return this.posts;
    }
}