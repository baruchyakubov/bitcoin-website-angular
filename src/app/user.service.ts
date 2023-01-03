import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Move } from './models/contact.model';
import { StorageService } from './storage.service';
import { User } from './models/contact.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storageService:StorageService) { }

  private _user$ = new BehaviorSubject<any>(this.storageService._loadFromStorage('user'))
  public user$ = this._user$.asObservable()

  public signUp(name: string) {
    const user = {
      name,
      coins: 100,
      moves: []
    }
    this.storageService._saveToStorage('user' , user)
    this._user$.next(user)
  }

  public updateUser(move: Move){
    let user = this.storageService._loadFromStorage('user')
    user.moves.unshift(move)
    user.coins -= move.amount
    this.storageService._saveToStorage('user' , user)
    this._user$.next(user)
  }

  public logout() {
    localStorage.removeItem('user')
    this._user$.next(null)
  }
}
