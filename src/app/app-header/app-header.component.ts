import { Component, OnInit , OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/contact.model';
import { Observable , Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit , OnDestroy {
  constructor(private userService: UserService) { }

  user!: User | null

  subscription!: Subscription

  ngOnInit(): void {
    this.subscription = this.userService.user$.subscribe(user => {
      this.user = user
    })    
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
}
}
