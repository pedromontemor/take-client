import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjaxService } from './ajax.service';
import { ContactService } from './contact.service';


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
    ],
    providers: [
        AjaxService,
        ContactService
    ]
})

export class ServicesModule {}
