import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  
  @Input() appareilName = "";
  @Input() appareilStatus = "";
  @Input() indexOfAppareil = 0;

  constructor(private appareilService: AppareilService) {
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
  onSwitchOn() {
    return this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  onSwitchOff() {
    return this.appareilService.switchOffOne(this.indexOfAppareil);
  }

}
