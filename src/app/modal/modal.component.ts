import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() user;
  @Input() open: boolean;

  constructor() { }

  ngOnInit() {
  }

}
