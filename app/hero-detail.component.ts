/**
*	Dependencies (assumes .ts extension)
**/
import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';
/**
*	Meta data
**/
@Component({
  moduleId: module.id,
	selector: 'my-hero-detail',
	templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})

/**
*	Component meat
*/
export class HeroDetailComponent implements OnInit {
    constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
    ) {}

    /** use this decorator if accepting inputs from a parent component
    @Input()
    **/
    hero: Hero;


    ngOnInit(): void {
        this.route.params
        .switchMap((params, Params) => this.heroService.getHero(+params['id']))
        .subscribe(hero => this.hero = hero);
    };

    goBack(): void {
        this.location.back();
    };

    save(): void {
        this.heroService.update(this.hero)
        .then(() => this.goBack());
    }
}