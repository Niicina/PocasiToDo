import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  todoList = [{
    itemName: 'PrvniToDo',
    itemDueDate: '11-01-2022',
    itemPriority: "vysoka",
    itemCategory: 'Prace'

  },
  {
    itemName: 'DruheToDo',
    itemDueDate: '12-01-2022',
    itemPriority: "nizka",
    itemCategory: 'Skola'

  },
  {
    itemName: 'TretiToDo',
    itemDueDate: '08-01-2022',
    itemPriority: "stredni",
    itemCategory: 'Osobni'

  }

] as any;

dnes: number = Date.now()

  constructor() { }

  ngOnInit() {
  }

}
