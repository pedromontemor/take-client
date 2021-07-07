import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeView } from './home/home.view';
import { ProfileView } from './profile/profile.view';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../components/components.module';

@NgModule({
    declarations: [
        HomeView,
        ProfileView,
    ],
    imports: [
        CommonModule,
        NgbModule,
        ComponentsModule
    ],
    providers: [

    ]
})

export class ViewsModule {}
