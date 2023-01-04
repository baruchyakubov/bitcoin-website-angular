import { Injectable } from '@angular/core';
import axios from 'axios';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private storageService:StorageService) { }

  public async getRate(coins: number) {
    return axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
  }

  public async getMarketPrice() {
    var Data = this.storageService._loadFromStorage('market-price')
    if (!Data) {
      Data = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
      Data = Data.data.values
      this.storageService._saveToStorage('market-price' , Data)
    }
    return Data
  }

  public async getTradingVolume() {
    var Data = this.storageService._loadFromStorage('trading-volume')
    if (!Data) {
      Data = await axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
      Data = Data.data.values
      this.storageService._saveToStorage('trading-volume' , Data)
    }
    return Data
  }
}
