import { Component, OnInit, Input } from '@angular/core';
import { PmuService } from '../../services/pmu.service';
import { Observable } from 'rxjs';
import { Poney } from '../../interfaces/poney';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-race-create',
  templateUrl: './race-create.component.html',
  styleUrls: ['./race-create.component.scss']
})
export class RaceCreateComponent implements OnInit {

  @Input() poney:Poney

  raceForm :FormGroup
  nameCtrl :FormControl
  poneyIdsCtrl :FormControl

  ponies$:Observable<Poney[]>
  constructor(private pmu : PmuService) { }

  ngOnInit() {

    this.ponies$=this.pmu.ponies

    this.nameCtrl=new FormControl('',Validators.required)
    this.poneyIdsCtrl=new FormControl([],[this.poneyValidator])

    this.raceForm= new FormGroup({
      name:this.nameCtrl,
      poneyIds:this.poneyIdsCtrl
    }
    )
  }

  poneyValidator(poneyIdsCtrl){
  if( poneyIdsCtrl.value.length){

  return undefined

  }
  else{
    return {poneyIdsLength:true}
  }

}

  

  handleSummit():void {
   //this.pmu.create();

   console.log(this.raceForm);
   console.log(this.nameCtrl);
   console.log(this.poneyIdsCtrl);
  }
}
