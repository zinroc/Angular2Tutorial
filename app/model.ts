import { Injectable } from '@angular/core';


@Injectable()
export class UserService {
	isLoggedIn: boolean;
	user: {name: string};
}