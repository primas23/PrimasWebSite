import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { AppComponent } from './components/app/app.component';
import { NavmenuComponent } from './components/shared/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { BlogSummaryComponent } from './components/blog/blog-summary/blog-summary.component';
import { BlogListComponent } from './components/blog/blog-list/blog-list.component';
//import { BlogComponent } from './components/blog/blog.component';

import { BlogService } from './services/blog-service';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavmenuComponent,
        HomeComponent,
        BlogListComponent,
        BlogSummaryComponent

  //      BlogComponent
    ],
    imports: [
        UniversalModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'blog', component: BlogListComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [BlogService]
})

export class AppModule {
}
