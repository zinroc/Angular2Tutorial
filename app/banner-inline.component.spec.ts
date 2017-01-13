/**
* Example code for testing component with INTERNAL templates and NO component dependancies
*/

import { ComponentFixture, TestBed } from '@angular/core/testing'; 
// TestBed @NgModule Angualr testing module
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerComponent } from './banner-inline.component';

describe('BannerComponent (inline template)', () => {
	let comp: BannerComponent;
	let fixture: ComponentFixture<BannerComponent>;
	let de: DebugElement;
	let el: HTMLElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ BannerComponent ], //declare the test component
		});

		fixture = TestBed.createComponent(BannerComponent);

		comp = fixture.componentInstance // BannerComponent test instance
										 //contains all BannerComponent properties, in this case one called "title" i.e. comp.title


		// query for the title <h1> by CSS element selector
		de = fixture.debugElement.query(By.css('h1'));// query gets the FIRST element in DOM
		//queryAll returns an array of all elemets
		el = de.nativeElement;
	});

	it('no title in the DOM until manually call `detectChanges`', () => {
	  expect(el.textContent).toEqual('');//without .detectChanges, nothing in DOM
	});


	it('should display original title', () => { //name of the test
		fixture.detectChanges(); //seems redundant, look at above test
		expect(el.textContent).toContain(comp.title); //expect the first h1 element to be the comp.title
	});

	it('should display a different test title', () => { //name of the test
		comp.title = 'Test Title'; 
		fixture.detectChanges(); // apply chage to comp.title
		expect(el.textContent).toContain('Test Title'); // expect the first h1 element to be the new comp.title
	});

});