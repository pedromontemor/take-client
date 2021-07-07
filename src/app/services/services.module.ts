import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjaxService } from './ajax.service';
import { ContactService } from './contact.service';
import { LocalStorageService } from './localstorage.service';


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
    ],
    providers: [
        AjaxService,
        ContactService,
        LocalStorageService
    ]
})

export class ServicesModule {}
