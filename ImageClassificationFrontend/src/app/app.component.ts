import { Component, OnInit } from '@angular/core';
import { IGUsers } from "../models/igusers";
import { IGUsersService } from "./igusers.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	users: Observable<IGUsers[]>;
	selectedUser: IGUsers;

	constructor (private igusersService: IGUsersService) { }
  
	ngOnInit() {
		this.users = this.igusersService.getUsers();
	}

	select(user: IGUsers) {
		this.selectedUser = user;
	}

}
