import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() itemSelected = new EventEmitter();

  public menuItemSelected(value: string): void {
    this.itemSelected.emit(value);
  }
}
