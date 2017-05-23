import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../../../models/post';

@Component({
    selector: 'post-summary',
    templateUrl: './post-summary.component.html'
})

export class PostSummaryComponent {
    @Input() post: Post;

    constructor(private router: Router) {        
    }

    navigateToPost() {
        this.router.navigate(['post/details', this.post.id]);        
    }
}
