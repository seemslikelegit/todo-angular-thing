import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo';
import {TodoService} from '../todo.service';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  
  constructor(private todoService: TodoService) { }

  deleteTodo(id) {
    this.todoService.deleteTodoById(id)
  }
  
}