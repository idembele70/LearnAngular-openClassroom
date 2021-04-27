import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  appareilSubscription = new Subscription();
  constructor(private appareilService: AppareilService, private router: Router) {

    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareil: any[]) => this.appareils = appareil);
    this.appareilService.emitAppareilSubject();
  }


  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    this.appareilService.switchOfAll();
  }

}
