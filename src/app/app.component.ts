import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  public scrollTo(el: string) {
    const element = document.getElementById(el);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
