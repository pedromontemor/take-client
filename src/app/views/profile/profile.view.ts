import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.view.html',
    styleUrls: ['./profile.view.scss']
})
export class ProfileView {

    contact: IContact = <IContact>{};

    constructor(public contactService: ContactService, public route: ActivatedRoute) {
        this.route.params.subscribe(param => {
            this.contactService.getByShortName(param.shortName).then(contact => {
                this.contact = contact;
            });
        });
    }
};
