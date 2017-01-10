/**
*	Dependencies (assumes .ts extension)
**/
import { Component, Input } from '@angular/core';
import { Hero } from './hero';

/**
*	Meta data
**/
@Component({
	selector: 'my-hero-detail',
	template: `
	<div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>`,
})

/**
*	Component meat
*/
export class HeroDetailComponent {
	@Input()
	hero: Hero;
}