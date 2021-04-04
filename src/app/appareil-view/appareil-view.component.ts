import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
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
