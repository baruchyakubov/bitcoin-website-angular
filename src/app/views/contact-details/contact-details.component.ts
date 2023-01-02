import { Component , OnInit  , OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit , OnDestroy {
  constructor(
    private route: ActivatedRoute
) { }



  subscription!: Subscription
  contact!: Contact 

  async ngOnInit(): Promise<void> {
      this.subscription = this.route.data.subscribe(data => {
        this.contact = data['contact']
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
}
}
