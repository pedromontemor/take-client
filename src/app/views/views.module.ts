import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeView } from './home/home.view';
import { ProfileView } from './profile/profile.view';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HomeView,
        ProfileView,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        ComponentsModule
    ],
    providers: [

    ]
})

export class ViewsModule {}
