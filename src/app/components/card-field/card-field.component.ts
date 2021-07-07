import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-field',
    templateUrl: './card-field.component.html',
    styleUrls: ['./card-field.component.scss']
})

export class CardFieldComponent implements OnInit {

    @Input() value: any;
    @Input() label: string = "";
    @Input() icon: string = "";
    @Input() theme: string = "";

    constructor() { }

    ngOnInit() {
    }

    getClass(): any {
        const cssClass: any = {};
        if (this.theme) {
            cssClass[`${this.theme}`] = true;
        }
        return cssClass;
    }

}
