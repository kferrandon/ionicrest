import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { BeerProvider } from '../../providers/beer/beer';

@Component({
  selector: 'beer',
  templateUrl: 'beer.html'
})
export class BeerPage {
    // apiUrl = 'https://randomuser.me/api/';
    beers: {};
    constructor(public beerProvider: BeerProvider) {
    console.log('debut');
        this.getBeer();
    }

   getBeer() {
         console.log('debut');
    this.beerProvider.getBeer()
    .then(data => {
      this.beers = data;
      console.log(this.beers);
    });
    console.log('fin');
  }
  
}
