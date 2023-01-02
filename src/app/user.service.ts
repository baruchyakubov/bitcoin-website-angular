import { Injectable } from '@angular/core';
import {of, Observable} from  'rxjs'
import { User } from './models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUser():Observable<User> {

    return of( { 
      name: "Ochoa Hyde", 
      coins: 100, 
      moves: [] 
     })
    
  }
}
