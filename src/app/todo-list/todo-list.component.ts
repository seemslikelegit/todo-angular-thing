import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service'
import {Todo} from '../todo'
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.loadTodos()
  }

  loadTodos() {
    this.todoService.getAllTodos()
  }
  removeTodo(todo) {
    this.todoService.toggleTodoComplete(todo)
  }
  createTodo() {
    const title = window.prompt("What do you want to accomplish?")
    if(!title) return
    this.todoService.addTodo({title,completed:false, id:0})
  }
}
