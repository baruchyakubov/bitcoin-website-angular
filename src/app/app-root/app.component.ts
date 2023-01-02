import { Component , OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/contact.model';
import { Observable , Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  constructor(private userService: UserService) {
    
   }

   subscription!: Subscription
  user!: User  
  ngOnInit(): void {
    this.subscription = this.userService.getUser().subscribe(user =>{
      this.user = user
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
}
}
