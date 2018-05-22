import { Component, OnInit, Input } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-modal',
  templateUrl: '../html/modal.component.html',
  styleUrls: ['../css/modal.component.less']
})
export class ModalComponent implements OnInit {

  @Input('user') user: User;
  @Input('open') open: boolean;

  constructor() { }

  ngOnInit() {
  }

}
