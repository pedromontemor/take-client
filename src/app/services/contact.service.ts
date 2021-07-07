import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContact } from '../models/IContact';
import { AjaxService } from './ajax.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor(public ajaxService: AjaxService) { }

    get(): Promise<IContact[]> {
        const apiUrl: string = environment.apiUrl;
        return this.ajaxService.get<IContact[]>(`${apiUrl}/api/contacts`)
    }

    getByShortName(shortName: string): Promise<IContact> {
        const apiUrl: string = environment.apiUrl;
        return this.ajaxService.get<IContact>(`${apiUrl}/api/contact/${shortName}`)
    }

    getFavorites() {

    }

    favorite(contact: IContact) {

    }

    disfavor(contact: IContact) {

    }


}
