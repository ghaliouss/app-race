import { Injectable } from '@angular/core';
import { Race} from './../interfaces/race';
import {Poney} from './../interfaces/poney';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { RaceSubscriber } from 'rxjs/internal/observable/race';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PmuService {

API : string ="http://localhost:3000/"

constructor(private httpClientModule:HttpClient){

}
  private _races: Race[] = [{
    "id": 0,
    "name": "Madrid",
    "poneyIds": [1, 2]
  },
  {
    "id": 1,
    "name": "Paris",
    "poneyIds": [0, 3]
  }
]

public getRaceById(id:number):Race{
return this._races.find((r)=>{ return r.id==id})
}

get ponies() :Observable<Poney[]>{
  return this.httpClientModule.get(`${this.API}ponies`).pipe(map((ponies)=><Poney []>ponies))
}

get races():Race[]{
  return this._races
}
}
