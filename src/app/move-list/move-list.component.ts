import { Component ,Input , OnDestroy , OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { UserService } from '../user.service';
import { User , Move } from '../models/contact.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnDestroy , OnInit {
  @Input() contact!:Contact
  @Input() moves!:Array<Move> 

  constructor( private userService: UserService ) { }

  user!: User  

  subscription!: Subscription

  ngOnInit(): void {
    this.subscription = this.userService.user$.subscribe(user => {
      this.user = user
    })
  }

  trackByFn(idx: number, item: Move) {
    return item.at
}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
