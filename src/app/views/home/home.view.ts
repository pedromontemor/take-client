import { Component } from '@angular/core';
import { IContact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.view.html',
    styleUrls: ['./home.view.scss']
})
export class HomeView {

    contacts: IContact[] = [];
    mode: string = "list";

    constructor(public contactService: ContactService) {
        this.contactService.get().then(contacts => {
            this.contacts = contacts;
        });
    }

    changeViewMode(mode: string) {
        this.mode = mode;
    }

    orderByCreation() {
        this.contacts.sort((a, b) => a.created > b.created ? 1 : -1);
    }

    orderByName() {
        this.contacts.sort((a, b) => a.name > b.name ? 1 : -1);
    }
};
