import { Directive,ElementRef,Input,HostListener } from '@angular/core';
import { Poney} from './../interfaces/poney';

@Directive({
  selector: '[appBoost]'
})
export class BoostDirective {

  @Input() poney:Poney
  @Input() hasBoost:boolean
  constructor(private elementRef : ElementRef ) { }

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor ="forestgreen"
   
  }
  @HostListener('dblclick') handleDblclick(){
    if(this.hasBoost){
      this.poney.distance+=10

      let runningImage=this.poney.img
      let rainbowImage=runningImage.replace('running','rainbow')
      this.poney.img=rainbowImage

      setTimeout(()=>{
        this.poney.img=runningImage
      },1000)
    }
    
  }

}
