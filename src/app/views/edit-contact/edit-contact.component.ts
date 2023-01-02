import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute, private contactService: ContactService , private router: Router,
  ) { }


  form!: NgForm
  subscription!: Subscription
  contact!: Contact

  async ngOnInit(): Promise<void> {
    this.subscription = this.route.data.subscribe(({ contact }) => {
      this.contact = contact?._id ? {...contact} : this.contactService.getEmptyContact() as Contact
    })
  }

  onSubmit(form: NgForm) {  
    (this.contact?._id) ? this.contactService.saveContact({ _id: this.contact._id, ...form.form.value })
      : this.contactService.saveContact({ ...form.form.value })
      this.router.navigateByUrl('/contact')
  }

  deleteContact(){
    const contact = {...this.contact}
    this.contactService.deleteContact(contact._id)
    this.router.navigateByUrl('/contact')
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
