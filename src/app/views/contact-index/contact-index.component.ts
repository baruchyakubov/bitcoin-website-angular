import { Component , OnInit  } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'contact-index',
  templateUrl: './contact-index.component.html',
  styleUrls: ['./contact-index.component.scss']
})
export class ContactIndexComponent implements OnInit {

  constructor(private ContactService: ContactService) { }

  contacts!: Contact[]
  contacts$!: Observable<Contact[]>
  subscription!: Subscription


  ngOnInit(): void {
    this.ContactService.loadContacts()
    this.contacts$ = this.ContactService.contacts$
}

}
