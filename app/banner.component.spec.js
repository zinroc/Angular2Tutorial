"use strict";
var testing_1 = require('@angular/core/testing');
var banner_inline_component_1 = require('./banner-inline.component');
var testing_2 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
describe('BannerComponent (templateUrl)', function () {
    var comp;
    var fixture;
    var de;
    var el;
    // async beforeEach
    beforeEach(testing_1.async(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [banner_inline_component_1.BannerComponent],
        })
            .compileComponents(); // compile template and css
    }));
    // synchronous beforeEach
    beforeEach(function () {
        fixture = testing_2.TestBed.createComponent(banner_inline_component_1.BannerComponent);
        comp = fixture.componentInstance; // BannerComponent test instance
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        el = de.nativeElement;
    });
    it('ASYNC should display original title', function () {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });
    it('ASYNC should display a different test title', function () {
        comp.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Title');
    });
});
//# sourceMappingURL=banner.component.spec.js.map