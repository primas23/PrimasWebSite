import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { User } from '../models/user';
import { Image } from '../models/image';

@Injectable()
export class UserService {
    users: User[];

    constructor(private http: Http) {
        let firstImage = new Image();
        firstImage.id = '1';
        firstImage.src = './images/avatar_g.jpg';
        firstImage.alt = 'avatar';
        let first = new User();
        first.id = '1';
        first.image = firstImage;
        first.firstName = 'Petar';
        first.lastName = 'Petrov';
        first.description = 'Web Developer';
        first.email = "petarpetrov@gmail.com"
        first.createdOn = new Date('April 7, 2014');
        first.comments = [];

        let secondImage = new Image();
        secondImage.id = '2';
        secondImage.src = './images/avatar_g.jpg';
        secondImage.alt = 'avatar';
        let second = new User();
        second.id = '2';
        second.image = firstImage;
        second.firstName = 'Ivan';
        second.lastName = 'Ivanov';
        second.description = 'Web Developer';
        second.email = "ivanivanov@gmail.com"
        second.createdOn = new Date('April 7, 2014');
        second.comments = [];

        let thirdImage = new Image();
        thirdImage.id = '3';
        thirdImage.src = './images/avatar_g.jpg';
        thirdImage.alt = 'avatar';
        let third = new User();
        third.id = '3';
        third.image = firstImage;
        third.firstName = 'Georgi';
        third.lastName = 'Georgiev';
        third.description = 'Web Developer';
        third.email = "georgigeorgiev@gmail.com"
        third.createdOn = new Date('April 7, 2014');
        third.comments = [];

        let forthImage = new Image();
        forthImage.id = '4';
        forthImage.src = './images/avatar_g.jpg';
        forthImage.alt = 'avatar';
        let forth = new User();
        forth.id = '4';
        forth.image = firstImage;
        forth.firstName = 'Nikolai';
        forth.lastName = 'Nikolov';
        forth.description = 'Web Developer';
        forth.email = "nikolainikolov@gmail.com"
        forth.createdOn = new Date('April 7, 2014');
        forth.comments = [];

        this.users = [first, second, third, forth];
    }

    //getPostSummaries() {
    //    //return this.http.get('api/Post/GetPostSummaries')
    //    //    .map(r => r.json() as Post[])
    //    //    .toPromise();
    //    var postSummary = this.posts.map(p => Object.assign({}, p));
    //    postSummary.forEach(p => p.content = p.content.substr(0, 100));
        
    //    return postSummary;
    //}

    getProfile() {
        return this.users.find(p => p.id === '1');
    }

    getUserDetails(id: string) {
        //return this.http.get(`api/Post/GetPostDetail/${id}`)
        //    .map(r => r.json() as Post)
        //    .toPromise();
        //console.log(this.posts);
        return this.users.find(p => p.id === id);
    }
}