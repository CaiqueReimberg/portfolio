import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public helloWorldMessage = "<b>Hello World!</b>"
  public bOpenTag = "<b>";
  public bCloseTag = "</b>";

  constructor() { }

  ngOnInit(): void {
  }

}
