import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { AppComponent } from './components/app/app.component';
import { NavmenuComponent } from './components/shared/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { PostSummaryComponent } from './components/post/post-summary/post-summary.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { PostDetailsComponent } from './components/post/post-details/post-details.component';
import { ProfileComponent } from './components/profile/profile.component';

import { PostService } from './services/post-service';
import { UserService } from './services/user-service';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavmenuComponent,
        HomeComponent,
        PostListComponent,
        PostSummaryComponent,
        PostDetailsComponent,
        ProfileComponent
    ],
    imports: [
        UniversalModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'post', component: PostListComponent },
            { path: 'post/:id', component: PostDetailsComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        PostService,
        UserService
    ]
})

export class AppModule {
}
