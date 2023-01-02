import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor() { }

  public async getRate(coins: number) {
    return axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
  }

  public async getMarketPrice() {
    var value = localStorage['market-price'] || null;
    let Data = JSON.parse(value);
    if (!Data) {
      Data = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
      Data = Data.data.values
      localStorage['market-price'] = JSON.stringify(Data);
    }
    console.log(Data);
    return Data
  }

  public async getTradingVolume() {
    var value = localStorage['trading-volume'] || null;
    let Data = JSON.parse(value);
    if (!Data) {
      Data = await axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
      Data = Data.data.values
      localStorage['trading-volume'] = JSON.stringify(Data);
    }
    console.log(Data);
    return Data
  }
}
