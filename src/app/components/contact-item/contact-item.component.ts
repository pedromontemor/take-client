import { Component, Input, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/IContact';

@Component({
    selector: 'app-contact-item',
    templateUrl: './contact-item.component.html',
    styleUrls: ['./contact-item.component.scss']
})

export class ContactItemComponent implements OnInit {


    @Input() item: IContact = <IContact>{};
    @Input() mode: string = "row";

    constructor() { }

    ngOnInit() {
    }

    favorite() {
        this.item.favorite = true;
    }

    disfavor() {
        this.item.favorite = false;
    }

}
