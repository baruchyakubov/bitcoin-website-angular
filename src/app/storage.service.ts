import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public _loadFromStorage(name: string) {
    const data = localStorage[name]
    return data ? JSON.parse(localStorage[name]) : null
  }

  public _saveToStorage(name: string, value: any) {
    localStorage.setItem(name, JSON.stringify(value))
  }
}
