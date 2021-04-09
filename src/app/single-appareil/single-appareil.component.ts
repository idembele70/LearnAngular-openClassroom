import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  name: any = "";
  status: any = "statut";

  constructor(private appareilService: AppareilService, private routes: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.routes.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(Number(id))?.name;
    this.status = this.appareilService.getAppareilById(Number(id))?.status;
  }

}
