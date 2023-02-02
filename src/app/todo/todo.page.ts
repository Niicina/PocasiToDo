import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from './../add-new-task/add-new-task.page';
import { TodosService } from './../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  todoList = [] as any

dnes: number = Date.now()

  constructor(public modalCtrl:ModalController, public todosService: TodosService) {
    this.getAllTask()
   }

  //přesměrování po kliknutí na button na stránku pro přidání todo
  async addTask(){
    const modal = await this.modalCtrl.create({
      component:AddNewTaskPage
    })
    
    //pridani prvku newtaskobj do array todoList
    modal.onDidDismiss().then(newTaskObj => {
   this.getAllTask()
    })
    
    return await modal.present()
    }

getAllTask(){
  this.todoList = this.todosService.getAllTasks()
console.log(this.todosService.getAllTasks()
)
}

//pridani metody pro odstraeni todo, pridani ze servisky
    delete(key: string){
   this.todosService.deleteTask(key)
   this.getAllTask()
    }

  ngOnInit() {
  }

}
