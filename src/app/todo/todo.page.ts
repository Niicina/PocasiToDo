import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  todoList = [{
    itemName: 'PrvnitoDo',
    itemDueDate: '11-01-2022',
    itemPriority: "vysoka",
    itemCategory: 'Prace'

  },
  {
    itemName: 'PrvnitoDo',
    itemDueDate: '12-01-2022',
    itemPriority: "mala",
    itemCategory: 'Skola'

  },
  {
    itemName: 'PrvnitoDo',
    itemDueDate: '14-01-2022',
    itemPriority: "stredni",
    itemCategory: 'Osobni'

  }

] as any;

dnes: number = Date.now()

  constructor() { }

  ngOnInit() {
  }

}
