import { Component , OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/contact.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  constructor(private userService: UserService , private router: Router) {
    
   }

   subscription!: Subscription
  user!: User
  ngOnInit(): void {
    this.subscription = this.userService.user$.subscribe(user =>{
      this.user = user
      if(!this.user) this.router.navigateByUrl('/')
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
}
}
