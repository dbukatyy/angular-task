import { Component, OnInit, Input } from '@angular/core';
import { User } from './user'

@Component({
  selector: 'app-modal',
  templateUrl: '../html/modal.component.html',
  styleUrls: ['../css/modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() user;
  @Input() open: boolean;

  constructor() { }

  ngOnInit() {
  }

}
