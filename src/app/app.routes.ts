
import {Routes} from '@angular/router'
import {HomeComponent} from './components/home/home.component'
import {RaceComponent} from './components/race/race.component'
import { RaceCreateComponent } from './components/race-create/race-create.component';
export const APP_ROUTES: Routes =[

    {

       path:'',
       redirectTo:'home',
       pathMatch:'full'
        
    },
{

    path:'home',
    component:HomeComponent
    
},

{

    path:'race/:id',
    component:RaceComponent
},
{

    path:'race-create',
    component:RaceCreateComponent
},

{

    path :'**',
    redirectTo:'home'
}




]