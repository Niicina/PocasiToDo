import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from './../add-new-task/add-new-task.page';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  todoList = [] as any

dnes: number = Date.now()

  constructor(public modalCtrl:ModalController) { }

  //přesměrování po kliknutí na button na stránku pro přidání todo
  async addTask(){
    const modal = await this.modalCtrl.create({
      component:AddNewTaskPage
    })
    
    //pridani prvku newtaskobj do array todoList
    modal.onDidDismiss().then(newTaskObj => {
      console.log(newTaskObj.data);
      this.todoList.push(newTaskObj.data)
    })
    
    return await modal.present()
    }

//pridani metody pro odstraeni todo
    delete(index: any){
  this.todoList.splice(index,1)
    }

  ngOnInit() {
  }

}
