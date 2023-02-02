import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodosService } from './../todos.service';


@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {

  
  taskName: any

  taskObject:any

  constructor(public modalCtrl: ModalController,public todoService: TodosService ) { }

  ngOnInit() {
  }
//mwtoda pro zavreni modalniho okna - pro krizek :)
  async dismis(){
  await this.modalCtrl.dismiss(this.taskObject)
  }

  //metoda pro pridani todo
async AddTask(){

  this.taskObject = ({itemName: this.taskName})
  this.dismis()
  let uid = this.taskName

  if(uid){
    await this.todoService.addTask(uid,this.taskObject)
  } else{
    console.log("chyba ukládání")
  }

}
}
