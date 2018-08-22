import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: any;
  constructor(public restProvider: RestProvider) {
         console.log('debut');
        this.getUsers();
        console.log('fin');
    }

   getUsers() {
      console.log('debutuser');
      this.restProvider.getUsers()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
    console.log('finuser');
  }
  
}
