import { Injectable } from '@angular/core';
import { Todo, Todos} from './todo.model'


@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todolist:Todos;
  constructor() { 
    this.todolist= new Array();
  }

  getAll(){
    return this.todolist;
  }

  get(id:number){
    let todo : Todo;
    this.todolist.filter(v => {
      if(v.id == id){
        todo = v;
      }
    });
     
    return todo;
  }

  getNewId(){
    let idArray:number[] = new Array();
    
      this.todolist.forEach(element => {
        idArray.push(element.id);
      });
      if(this.todolist.length>0){
        return Math.max(...idArray) +1;
      }else{
        return 1;
      }
      

    
  }

  add(todo : Todo){
    let id:number = this.getNewId();
    todo.id = id;
    this.todolist.push(todo);
    console.log(this.todolist);
  }

  edit(todo : Todo){
    this.todolist.filter(function(v){
      if(v.id == todo.id){
        v.label = todo.label;
      }
    })
  }

  delete(id:number){
    let index:number;
    this.todolist.filter((v,i)=> {
      if(v.id==id){
        index=i;
      }
    });
    this.todolist.splice(index,1);
  }
}
