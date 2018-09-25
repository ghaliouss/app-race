import {
  Component
} from '@angular/core';
import {
  Poney
} from './interfaces/poney';
import {
  Race
} from './interfaces/race';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'race-app';

 
  races: Race[] = [{
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


  getDate(): Date {
    return new Date()
  }

}
