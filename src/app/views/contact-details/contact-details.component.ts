import { Component , OnInit  , OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact , Move , User } from 'src/app/models/contact.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit , OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
) { }



  subscription!: Subscription
  subscription2!: Subscription
  contact!: Contact 
  moves!: Array<Move> 
  user!:User

  async ngOnInit(): Promise<void> {
      this.subscription = this.route.data.subscribe(data => {
        this.contact = data['contact']
    })
    this.subscription2 = this.userService.user$.subscribe(user => {
      this.user = user
      this.moves = this.user.moves.filter((move:Move) => {
        return move.toId === this.contact._id
      })})
  }

  


  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
    this.subscription2?.unsubscribe()
  }

 
  
}
