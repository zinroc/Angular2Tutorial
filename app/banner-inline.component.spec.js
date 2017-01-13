/**
* Example code for testing component with INTERNAL templates and NO component dependancies
*/
"use strict";
var testing_1 = require('@angular/core/testing');
// TestBed @NgModule Angualr testing module
var platform_browser_1 = require('@angular/platform-browser');
var banner_inline_component_1 = require('./banner-inline.component');
describe('BannerComponent (inline template)', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [banner_inline_component_1.BannerComponent],
        });
        fixture = testing_1.TestBed.createComponent(banner_inline_component_1.BannerComponent);
        comp = fixture.componentInstance; // BannerComponent test instance
        //contains all BannerComponent properties, in this case one called "title" i.e. comp.title
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(platform_browser_1.By.css('h1')); // query gets the FIRST element in DOM
        //queryAll returns an array of all elemets
        el = de.nativeElement;
    });
    it('no title in the DOM until manually call `detectChanges`', function () {
        expect(el.textContent).toEqual(''); //without .detectChanges, nothing in DOM
    });
    it('should display original title', function () {
        fixture.detectChanges(); //seems redundant, look at above test
        expect(el.textContent).toContain(comp.title); //expect the first h1 element to be the comp.title
    });
    it('should display a different test title', function () {
        comp.title = 'Test Title';
        fixture.detectChanges(); // apply chage to comp.title
        expect(el.textContent).toContain('Test Title'); // expect the first h1 element to be the new comp.title
    });
});
//# sourceMappingURL=banner-inline.component.spec.js.map