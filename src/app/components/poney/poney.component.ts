import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import { Poney} from './../../interfaces/poney';

@Component({
  selector: 'app-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss']
})
export class PoneyComponent implements OnInit {

  @Input() poney:Poney
  @Output() win:EventEmitter<Poney>= new EventEmitter()
  intervalId

  constructor() { }

  ngOnInit() {
    this.startRunning()
  
  }

   startRunning(){
    this.intervalId=setInterval(() => { this.poney.distance+=Math.floor(Math.random()*5)+1
    
    if(this.poney.distance >= 90){
      this.win.emit(this.poney)
      this.poney.distance=90
      this.stopRunning()

    }
    
    },1000)

    }


    stopRunning(){
      clearInterval(this.intervalId)
    }


    ngOnDestroy(){
      this.stopRunning()
      this.poney.distance=0
    }
  }
  

