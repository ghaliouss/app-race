import { Injectable, Input } from '@angular/core';
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

private races_ :Race[]
public getRaceById(id:number):Observable<Race>{
  return this.httpClientModule.get(`${this.API}races/${id}`).pipe(map((race)=><Race>race))
}

get ponies() :Observable<Poney[]>{
  return this.httpClientModule.get(`${this.API}ponies`).pipe(map((ponies)=><Poney []>ponies))
}

get races():Observable<Race[]>{
  return this.httpClientModule.get(`${this.API}races`).pipe(map((races)=>{
    this.races_=<Race[]>races;
    return this.races_;
  }))
}


create(race:Race):Observable<Race>{
  return this.httpClientModule.post(`${this.API}races`,race).pipe(map(race => <Race>race));
}
}
