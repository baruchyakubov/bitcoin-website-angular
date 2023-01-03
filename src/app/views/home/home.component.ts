import { Component, OnDestroy, OnInit } from '@angular/core';
import { Move, User } from 'src/app/models/contact.model';
import { BitcoinService } from 'src/app/bitcoin.service';
import { UserService } from 'src/app/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private bitcoinService: BitcoinService, private userService: UserService , private router: Router) { }

  bitcoin!: number
  user!: User
  moves!:Array<Move>  

  subscription!: Subscription

  ngOnInit(): void {
    this.subscription = this.userService.user$.subscribe(user => {
      this.user = user
      
      if (this.user) {
        this.moves = this.user.moves.slice(0,3)
        this.bitcoinService.getRate(this.user.coins)
          .then(res => {
            this.bitcoin = res.data
          })
      }

    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  onLogout(){
    this.router.navigateByUrl('/')
    this.userService.logout()
  }
}
