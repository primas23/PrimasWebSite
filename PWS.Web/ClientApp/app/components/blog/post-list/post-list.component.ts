import { Component, OnInit } from '@angular/core';

import { Post } from '../../../models/post';

import { PostService } from '../../../services/post-service';

@Component({
    selector: 'post-list',
    templateUrl: './post-list.component.html'
})

export class PostListComponent {
    postSummaries: Post[];

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        this.postSummaries = this.postService.getPostSummaries() as Post[];        
    }
}
