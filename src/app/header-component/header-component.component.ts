import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';


@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent {
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;
  
  isMenuOpen = false;
  constructor() {};
  
}
