import { Component , OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  constructor(private userService: UserService , private router: Router){ }

  user!: User | null
  subscription!: Subscription

  ngOnInit(): void {
    this.subscription = this.userService.user$.subscribe(user => {
      if(user) this.router.navigateByUrl('/home')
    })    
  }

  onSubmit(form: NgForm){
    this.userService.signUp(form.form.value.name)
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
}
}
