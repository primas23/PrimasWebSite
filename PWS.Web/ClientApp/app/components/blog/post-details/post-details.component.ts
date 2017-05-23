import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../../../services/post-service';

import { Post } from '../../../models/post';

@Component({
    selector: 'post-details',
    templateUrl: './post-details.component.html'
})

export class PostDetailsComponent {

    @Input() postDetails: Post;

    constructor(
        private postService: PostService,
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        let id = this.activatedRoute.snapshot.params['id'] as string;
        this.postDetails = this.postService.getPostDetails(id);            
    }
}
