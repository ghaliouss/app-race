import { Component,Input,Output, OnInit } from '@angular/core';
import { Race} from './../../interfaces/race';
import {Poney} from './../../interfaces/poney';
import { PmuService } from './../../services/pmu.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  
  race:Race

  constructor ( private pumService :PmuService,private route:ActivatedRoute){
    
  }

  ponies$: Observable <Poney[]> 


handleWin(poney: Poney): void {
  console.log(`Victore de ${poney.name}`)
}

  ngOnInit() {
    this.ponies$=this.pumService.ponies
    let urlParams
    this.route.params.pipe(map((urlParams)=>urlParams.id)).subscribe((id)=>{
       // console.log(id)
        this.race=this.pumService.getRaceById(Number(id))
        let a =1
        let b=2

        a=b
        console.log(a)

    });

  }

}
