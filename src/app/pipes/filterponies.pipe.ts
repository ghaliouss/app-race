import { Pipe, PipeTransform } from '@angular/core';
import {
  Poney
} from './../interfaces/poney';
@Pipe({
  name: 'filterponies'
})
export class FilterponiesPipe implements PipeTransform {

  transform(ponies: Poney[], poneyIds: number []): Poney[] {
    return ponies.filter((p)=>poneyIds.includes(p.id ));
  }

}
