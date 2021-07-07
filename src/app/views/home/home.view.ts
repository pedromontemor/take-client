import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IContact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.view.html',
    styleUrls: ['./home.view.scss']
})
export class HomeView {

    contacts: IContact[] = [];
    searchForm = this.formBuilder.group({
        search: ""
      });

    get favoriteContacts(): IContact[] {
        return this.contacts.filter(c=> c.favorite && c.name.toLowerCase().includes(this.searchForm.value.search.toLowerCase()));
    };
    get disfavorContacts(): IContact[] {
        return this.contacts.filter(c=> !c.favorite && c.name.toLowerCase().includes(this.searchForm.value.search.toLowerCase()));
    }
    mode: string = "list";

    constructor(public contactService: ContactService, public formBuilder: FormBuilder) {
        let favoriteContacts: IContact[] = this.contactService.getFavorites();
        this.contactService.get().then(contacts => {
            this.contacts = contacts.map(c=> {
                c.favorite = favoriteContacts.filter(contact=> contact.shortName == c.shortName).length > 0
                return c;
            });
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
