import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component'; 



@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule
  ],
  declarations: [ 
  	AppComponent,
    HeroesComponent,
    HeroDetailComponent, 
  ],
  bootstrap:    [ 
  	AppComponent 
  ], 
  providers: [
    HeroService
  ] // service IS useable by all children of this component

})
export class AppModule { }
