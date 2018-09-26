import {
  Component
} from '@angular/core';
import {
  Poney
} from './interfaces/poney';
import {
  Race
} from './interfaces/race';
import { PmuService } from './services/pmu.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'race-app';
  
  getDate(): Date {
    return new Date()
  }

}
