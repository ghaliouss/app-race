import { Injectable } from '@angular/core';
import { Race} from './../interfaces/race';
import {Poney} from './../interfaces/poney';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { RaceSubscriber } from 'rxjs/internal/observable/race';

@Injectable({
  providedIn: 'root'
})
export class PmuService {


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

  private _ponies: Poney[] = [{
    "id": 0,
    "distance": 0,
    "name": 'Fatah',
    "img": "http://ponyracer.ninja-squad.com/assets/images/pony-green-running.gif",
    "boost": true
  },
  {
    "id": 1,
    "distance": 0,
    "name": 'Oussema',
    "img": "http://ponyracer.ninja-squad.com/assets/images/pony-purple-running.gif",
    "boost": true
  },
  {
    "id": 2,
    "distance": 0,
    "name": 'Romain',
    "img": "http://ponyracer.ninja-squad.com/assets/images/pony-orange-running.gif",
    "boost": true
  },
  {
    "id": 3,
    "distance": 0,
    "name": 'François',
    "img": "http://ponyracer.ninja-squad.com/assets/images/pony-blue-running.gif",
    "boost": false
  }
]

public getRaceById(id:number):Race{
return this._races.find((r)=>{ return r.id==id})
}

get ponies() :Poney[]{
  return this._ponies
}

get races():Race[]{
  return this._races
}
}
