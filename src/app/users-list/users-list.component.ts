import { Component, OnInit } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];

  constructor() { }

  ngOnInit() {
  	fetch('http://jsonplaceholder.typicode.com/users')
  		.then(response => response.json())
  		.then(persons => {
    		this.users = persons;
  		})
  }

}
