import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  secondes: number = 0;
  compteurSubscription= new Subscription
  constructor() { }
  ngOnInit() {
    const counter = Observable.interval(1000);
    this.compteurSubscription = counter.subscribe(
      (value: number) => this.secondes = value
    )
  }
  ngOnDestroy() {
    this.compteurSubscription.unsubscribe(); 
  }
}

