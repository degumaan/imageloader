import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  public userCard : Array<{id: number, name: string, email: string, phone: string}>;

  constructor() {
    
    this.userCard = [
      {
        name: "user1",
        id: 1,
        email: "user1@test.com",
        phone: "1234xxx"
      },
      {
        name: "user2",
        id: 2,
        email: "user2@test.com",
        phone: "1234xxx"
      }

    ];

  }




}
