import { Component } from '@angular/core';

@Component({
    selector: 'navmenu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})

export class NavmenuComponent {
    public size: number = 0;

    public showMenu() {
        this.size = this.size <= 0 ? 150 : 0;
    }
}