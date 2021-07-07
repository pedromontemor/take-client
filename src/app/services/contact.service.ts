import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContact } from '../models/IContact';
import { AjaxService } from './ajax.service';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './localstorage.service';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    private favoriteKey: string = "favorites";

    constructor(public ajaxService: AjaxService, public localStorageService: LocalStorageService) { }

    public get(): Promise<IContact[]> {
        const apiUrl: string = environment.apiUrl;
        return this.ajaxService.get<IContact[]>(`${apiUrl}/api/contacts`)
    }

    public getByShortName(shortName: string): Promise<IContact> {
        const apiUrl: string = environment.apiUrl;
        return this.ajaxService.get<IContact>(`${apiUrl}/api/contact/${shortName}`)
    }

    public getFavorites(): IContact[] {
        return <IContact[]>this.localStorageService.getJson(this.favoriteKey) || <IContact[]>[];

    }

    public favorite(contact: IContact) {
        let contacts: IContact[] = this.getFavorites();
        contact.favorite = true;
        contacts.push(contact);
        this.localStorageService.setJson(this.favoriteKey, contacts);
    }

    public disfavor(contact: IContact) {
        let contacts: IContact[] = this.getFavorites();
        let c: IContact = contacts.filter(c => c.shortName == contact.shortName)[0];
        let index: number = contacts.indexOf(c);
        contacts.splice(index, 1);
        contact.favorite = false;
        this.localStorageService.setJson(this.favoriteKey, contacts);
    }


}
