import { Component, Input, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
    selector: 'app-contact-item',
    templateUrl: './contact-item.component.html',
    styleUrls: ['./contact-item.component.scss']
})

export class ContactItemComponent implements OnInit {


    @Input() item: IContact = <IContact>{};
    @Input() mode: string = "row";

    constructor(public contactService: ContactService) { }

    ngOnInit() {
    }

    favorite() {
        this.contactService.favorite(this.item);
    }

    disfavor() {
        this.contactService.disfavor(this.item);
    }

}
