import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class TodosService {
//importování storage a injectování v konstuktoru
  constructor(private storage: Storage) { 
    this.init()
  }
  addTask(key: string, value: any){
  this.storage.set(key,value)
  }
  //pridani delete key - github
  deleteTask(key: string){
    this.storage.remove(key);

  }

  updateTask(){

    

  }


  //získá všechny záznamy ze storage
  getAllTasks(){
  let tasks: any = []
   this.storage.forEach((key, value, index) => {
   tasks.push({'key':value, 'value':key})
  });
  return tasks
  }

  //metoda pro zavolani když chceme použít storage, metoda se zavolá v konstruktoru
async init(){
await this.storage.create()
}

}
