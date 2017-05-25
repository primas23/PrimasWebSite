import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../models/user';

import { UserService } from '../../services/user-service';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html'
})

export class ProfileComponent {
    profile: User;

    constructor(private userService: UserService) {
        this.profile = userService.getProfile() as User;
    }
}
