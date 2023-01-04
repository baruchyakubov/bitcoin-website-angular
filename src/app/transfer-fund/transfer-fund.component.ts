import { Component , Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact , User } from '../models/contact.model';
import { UserService } from '../user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent {
@Input() contact!:Contact
@Input() user!:User



constructor(private userService: UserService){ }

  onTransferCoins(form: NgForm){
    console.log(form.form.value);
    const move = {
      toId: this.contact._id,
      to: this.contact.name,
      at:Date.now(),
      amount: +form.form.value.coins
    }
    this.userService.updateUser(move)
  }
}
