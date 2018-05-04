import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name = 'Denys';
  public surname = 'Lymarenko';

  public sayHello(value: string) {
    console.log(value);
  }
}
