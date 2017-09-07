import { Component, OnInit } from '@angular/core';

@Component({
moduleId:module.id,
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos;
text;
  constructor() { }

  ngOnInit() {
  this.todos=[
   {
   text:'Prva komponenta'
   },
   {
   text:'Druga komponenta'
   },
   {
   text:'Treca komponenta'
   }
  ]
  }
addTodo(){
console.log(this.text);
this.todos.push({
text:this.text
});

}
}
