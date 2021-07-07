import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFieldComponent } from './card-field/card-field.component';
import { IconComponent } from './icon/icon.component';
import { FieldComponent } from './field/field.component';
import { ContactItemComponent } from './contact-item/contact-item.component';


@NgModule({
    declarations: [
        IconComponent,
        CardFieldComponent,
        FieldComponent,
        ContactItemComponent
    ],
    imports: [
        CommonModule,
    ],
    providers: [

    ],
    exports: [
        IconComponent,
        CardFieldComponent,
        FieldComponent,
        ContactItemComponent
    ]
})

export class ComponentsModule {}
