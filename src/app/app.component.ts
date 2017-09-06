import { Component } from '@angular/core';
import { TodosComponent} from './todos/todos.component';
@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  <app-todos></app-todos>` ,
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'app works!';
}
