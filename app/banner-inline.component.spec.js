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
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        el = de.nativeElement;
    });
});
//# sourceMappingURL=banner-inline.component.spec.js.map