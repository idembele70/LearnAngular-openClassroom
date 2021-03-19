import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName = "";
  @Input() appareilStatus = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    switch (this.appareilStatus) {
      case "allumer":
        return 'green';
      case "éteint":
        return 'red';
      default:
        return 'invalid color';
    }
  }
}
