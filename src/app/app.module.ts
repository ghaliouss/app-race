import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PoneyComponent } from './components/poney/poney.component';
import { FormsModule } from '@angular/forms';
import { BoostDirective } from './directives/boost.directive';
import { RaceComponent } from './components/race/race.component';
import { MaterialModule } from './modules/material/material.module';
import { ClonePipe } from './pipes/clone.pipe';
import { FilterponiesPipe } from './pipes/filterponies.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PoneyComponent,
    BoostDirective,
    RaceComponent,
    ClonePipe,
    FilterponiesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
