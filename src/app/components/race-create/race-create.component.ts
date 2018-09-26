import { Component, OnInit, Input } from '@angular/core';
import { PmuService } from '../../services/pmu.service';
import { Observable } from 'rxjs';
import { Poney } from '../../interfaces/poney';

@Component({
  selector: 'app-race-create',
  templateUrl: './race-create.component.html',
  styleUrls: ['./race-create.component.scss']
})
export class RaceCreateComponent implements OnInit {

  @Input() poney:Poney

  ponies$:Observable<Poney[]>
  constructor(private pmu : PmuService) { }

  ngOnInit() {

    this.ponies$=this.pmu.ponies
  }


  handleSummit():void {
   //this.pmu.create();
  }
}
