import { Component } from '@angular/core';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

   lastUpdate = new Promise <string>(
  (resolve, reject) => {
      const date = Date();
      setTimeout(() => {
        resolve(date);
      }, 2000);
    }
  );

  appareils = [
    {
      name: "Machine à laver",
      status: "éteint",
    },
    {
      name: "Télévsion",
      status: "allumer",
    },
    {
      name: "Ordinateur",
      status: "éteint",
    },
  ];
  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
  onAllumer() {
    console.log('on Allumer Tout');

  }
}

