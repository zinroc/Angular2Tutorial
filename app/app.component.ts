import { Component } from '@angular/core';


@Component ({
	moduleId: module.id,
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<nav>
			<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
			<a routerLink="/heroes" rouerLinkActive="active">Heroes</a>
		</nav>
		<router-outlet></router-outlet>
	`, 
	styleUrls: ['app.component.css'] //needs to module.id to work
})

export class AppComponent {
  title = 'Tour of Heroes';
}