import { Component,Input,Output, OnInit } from '@angular/core';
import { Race} from './../../interfaces/race';
import {Poney} from './../../interfaces/poney';
@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  
  @Input() race:Race

  constructor() { }
  ponies: Poney[] = [{
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


handleWin(poney: Poney): void {
  console.log(`Victore de ${poney.name}`)
}

  ngOnInit() {
  }

}
