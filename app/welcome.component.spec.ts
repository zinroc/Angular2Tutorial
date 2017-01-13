import { WelcomeComponent } from './welcome.component';
import { ComponentFixture, TestBed } from '@angular/core/testing'; 
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { UserService } from './model';
	
	
describe('WelcomeComponent (stubbed service)', () => {
	let comp: WelcomeComponent;
	let fixture: ComponentFixture<WelcomeComponent>;
	let de: DebugElement;
	let el: HTMLElement;
	let userServiceStub: UserService;
	let userService: UserService;

	beforeEach(() => {
		// stub UserService for test purposes
		userServiceStub = {
			isLoggedIn: true,
			user: { name: 'Test User'}
		};

		TestBed.configureTestingModule({
			declarations: [ WelcomeComponent ],
			providers:    [ {provide: UserService, useValue: userServiceStub } ]
		});

		fixture = TestBed.createComponent(WelcomeComponent);
		comp    = fixture.componentInstance;

		// UserService from the root injector
		//userService = TestBed.get(UserService);
		// UserService actually injected into the component
		userService = fixture.debugElement.injector.get(UserService);


		//  get the "welcome" element by CSS selector (e.g., by class name)
		de = fixture.debugElement.query(By.css('.welcome'));
		el = de.nativeElement;
	});

	it('should welcome the user', () => {
		fixture.detectChanges();
		const content = el.textContent;
		expect(content).toContain('Welcome', '"Welcome ..."');
		expect(content).toContain('Test User', 'expected name');
	});

	it('should welcome "Bubba"', () => {
		userService.user.name = 'Bubba'; // welcome message hasn't been shown yet
		fixture.detectChanges();
		expect(el.textContent).toContain('Bubba');
	});

	it('should request login if not logged in', () => {
		userService.isLoggedIn = false; // welcome message hasn't been shown yet
		fixture.detectChanges();
		const content = el.textContent;
		expect(content).not.toContain('Welcome', 'not welcomed');
		expect(content).toMatch(/log in/i, '"log in"');
	});

});
