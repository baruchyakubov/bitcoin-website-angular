import { Component , OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ContactFilter } from '../models/contact.model';
import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {
  constructor(private contactService: ContactService) { }

  contactFilter$!: Observable<ContactFilter>
  contactFilter!: ContactFilter 

  ngOnInit(): void {
     this.contactService.contactFilter$.subscribe((filterBy) => {
      this.contactFilter = filterBy
     })
  }

  onSetFilter(){
    this.contactService.setFilter({ ...this.contactFilter })
  }
}
