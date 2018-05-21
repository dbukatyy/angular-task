import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-users-list',
  templateUrl: '../html/users-list.component.html',
  styleUrls: ['../css/users-list.component.css']
})

export class UsersListComponent implements OnInit {

  users: User[];

  selectedUser: User;

  openModal: boolean;

  dataLoaded = false;

  constructor() { }

  ngOnInit() {

    this.openModal = localStorage.getItem('openModal') === 'true' ? true : false;
    this.selectedUser = JSON.parse(localStorage.getItem('selectedUser'));

    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(persons => {
        this.users = persons;
        this.dataLoaded = true;
      });
  }

  onSelect(user: User): void {
    this.selectedUser = user;
    this.openModal = true;
    localStorage.setItem('openModal', 'true');
    localStorage.setItem('selectedUser', JSON.stringify(this.selectedUser));
  }

  onModalOff(e): void {
    this.openModal = false;
    localStorage.setItem('openModal', 'false');
  }

}
