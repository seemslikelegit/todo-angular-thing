import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service'
import {Todo} from '../todo'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.load()
  }

  load() {
    this.todoService.loadTodos()
  }

  deleteTodo({id}) {
    this.todoService.deleteTodoById(id)
  }
  
  createTodo() {
    const title = window.prompt("What do you want to accomplish?")
    if(!title || !title.trim()) return
    this.todoService.addTodo(title)
  }
  get todos() {
    return this.todoService.todos
  }
}