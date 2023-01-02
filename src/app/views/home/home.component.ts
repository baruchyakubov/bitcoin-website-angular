import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/models/contact.model';
import { BitcoinService } from 'src/app/bitcoin.service';
import { UserService } from 'src/app/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {
  constructor(private bitcoinService: BitcoinService, private userService: UserService) { }

  bitcoin!: number
  user!: User

  subscription!: Subscription

  ngOnInit(): void {
    this.subscription = this.userService.getUser().subscribe(user => {
      this.user = user
      this.bitcoinService.getRate(this.user.coins)
        .then(res => {
          this.bitcoin = res.data
        })
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
