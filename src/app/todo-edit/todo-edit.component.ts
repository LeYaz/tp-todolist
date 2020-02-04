import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-list/todo.model';
import { TodoListService } from '../todo-list/todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'td-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  todo:Todo;

  constructor(private serviceTodoList: TodoListService, private router:Router, private activatedroute: ActivatedRoute) { }


  ngOnInit() {
    if(this.activatedroute.snapshot.paramMap.get('id')!=null){
      this.todo = this.serviceTodoList.get(parseInt(this.activatedroute.snapshot.paramMap.get('id')));
    }else{
      this.todo = new Todo(0,"");
    }
    
  }

  addTodo(){
    if(this.todo.id==0){
      this.serviceTodoList.add(this.todo);
    }else{
      this.serviceTodoList.edit(this.todo);
    }
    this.router.navigate(['/list']);
  }

  

}
