import { Component , OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/bitcoin.service';
import { BitcoinData , DataSet , FullDataSet } from 'src/app/models/contact.model';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {
  constructor(private bitcoinService: BitcoinService) { }
  ngOnInit(): void {
    this.getMarketPrice()
    this.getTradingVolume()
  }

  dataset!: FullDataSet
  dataset2!: FullDataSet

  getMarketPrice = async () => {
    try {
        const data = await this.bitcoinService.getMarketPrice()
        this.dataset = {...this.setData(data) , id:'my_first_chart'}
    } catch (err) {
        console.log('error', err);
    }
}

getTradingVolume = async () => {
    try {
        const data = await this.bitcoinService.getTradingVolume()
        this.dataset2 = {...this.setData(data) , id:'my_second_chart'}
    } catch (err) {
        console.log('error', err);
    }
}

setData = (data:Array<BitcoinData>) => {
    let dataset:DataSet = {
        categories: [],
        data: []
    }
    for (var i = 0; i < 15; i++) {
        const date = new Date(data[i].x * 1000)
        const dateFormat = date.toLocaleDateString()
        dataset.categories.unshift(dateFormat.slice(0, dateFormat.length-5))
        dataset.data.unshift(Math.trunc(data[i].y))
    }
    return dataset
}
}
