import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactResolver implements Resolve<Contact> {
  constructor(private contactService: ContactService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact> {
    const contactId = route.params['id']
    return this.contactService.getContactById(contactId)
  }
}
