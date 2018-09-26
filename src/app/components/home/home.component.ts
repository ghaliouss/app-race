import {
  Component
} from '@angular/core';
import {
  Poney
} from './../../interfaces/poney';
import {
  Race
} from './../../interfaces/race';
import { PmuService } from './../../services/pmu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  constructor ( private pumService :PmuService){
  }
 
  races: Race[] = this.pumService.races

ngOnInit(){
  this.races=this.pumService.races
}

}
