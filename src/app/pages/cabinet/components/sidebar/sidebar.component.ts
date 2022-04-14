import { User } from '@app/models/backend/User';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() isOpen: Boolean = false;
  @Input() user: User | null;
  userRole = 0;
  constructor() {
    this.user = null;
  }

  ngOnInit(): void {
    this.userRole = this.user?.role as number;
  }
}
