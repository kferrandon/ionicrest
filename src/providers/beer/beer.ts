import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BeerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BeerProvider {
    apiUrl = 'https://api.punkapi.com/v2/beers/random';
    constructor(public http: HttpClient) {
        console.log('Hello BeerProvider Provider');
    }

    getBeer() {
        return new Promise(resolve => {
            this.http.get(this.apiUrl).subscribe(data => {
            resolve(data);
        }, err => {
            console.log(err);
      });
    });
  }
}
