import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {

  
  taskName: any

  taskObject:any

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }
//mwtoda pro zavreni modalniho okna - pro krizek :)
  async dismis(){
  await this.modalCtrl.dismiss(this.taskObject)
  }

  //metoda pro pridani todo
AddTask(){

  this.taskObject = ({itemName: this.taskName})
  this.dismis()

}
}
