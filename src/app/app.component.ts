import { Component, OnInit } from '@angular/core';
import { promise } from 'selenium-webdriver';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth = false;

  lastUpdate = new Promise<string>(
    (resolve, reject) => {
      const date = Date();
      setTimeout(() => {
        resolve(date);
      }, 2000);
    }
  );

  appareils = <any>[];
  constructor(private AppareilService: AppareilService) {

    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit() {
    this.appareils = this.AppareilService.appareils;
  }


  onAllumer() {
    this.AppareilService.switchOnAll();
  }

  onEteindre() {
    this.AppareilService.switchOfAll();
  }
 
}

