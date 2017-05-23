import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { AppComponent } from './components/app/app.component';
import { NavmenuComponent } from './components/shared/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { PostSummaryComponent } from './components/blog/post-summary/post-summary.component';
import { PostListComponent } from './components/blog/post-list/post-list.component';
//import { BlogComponent } from './components/blog/blog.component';

import { PostService } from './services/post-service';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavmenuComponent,
        HomeComponent,
        PostListComponent,
        PostSummaryComponent

  //      BlogComponent
    ],
    imports: [
        UniversalModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'blog', component: PostListComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [PostService]
})

export class AppModule {
}
