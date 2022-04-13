import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() isOpen: Boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
