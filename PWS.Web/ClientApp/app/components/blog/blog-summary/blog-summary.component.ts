import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Blog } from '../../../models/blog';

@Component({
    selector: 'blog-summary',
    templateUrl: './blog-summary.component.html'
})

export class BlogSummaryComponent {
    @Input() blog: Blog;

    constructor(private router: Router) {
    }

    navigateToBlog() {
        this.router.navigate(['blog/details', this.blog.id]);
    }
}
