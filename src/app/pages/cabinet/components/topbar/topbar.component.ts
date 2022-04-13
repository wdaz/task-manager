import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@app/models/backend/User';
import { Role } from '@app/models/enums/role.enum';

@Component({
  selector: 'tm-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  @Output() openEvent = new EventEmitter();
  @Output() signOutEvent = new EventEmitter();

  @Input() user: User | null;
  role = Role;

  constructor() {
    this.user = null;
  }

  ngOnInit(): void {}
}
