import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  secondes: number = 0;
  constructor() { }
  ngOnInit() {
    const counter = Observable.interval(1000);
    counter.subscribe(
      (value: number) => this.secondes = value,
      (error: any) => console.log('Une erreur à été rencontré !'),
      () => console.log('L\'observable est complété l\'ami !')
    )
  }
}

