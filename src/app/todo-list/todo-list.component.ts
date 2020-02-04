import { Component, OnInit } from '@angular/core';
import { Todos } from './todo.model';
import { TodoListService } from './todo-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'td-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todolist :Todos = new Array();

  constructor(private todolistService: TodoListService) { }

  ngOnInit() {
    this.todolist = this.todolistService.getAll();
  }


  deleteTodo(id:number){
    this.todolistService.delete(id);
  }

}
