import { Component, OnInit } from '@angular/core';

import { Blog } from '../../../models/blog';

import { BlogService } from '../../../services/blog-service';

@Component({
    selector: 'blog-list',
    templateUrl: './blog-list.component.html'
})

export class BlogListComponent {
    blogSummaries: Blog[];

    constructor(private blogService: BlogService) {
    }

    ngOnInit() {
        this.blogSummaries = this.blogService.getBlogSummaries() as Blog[];
    }
}
