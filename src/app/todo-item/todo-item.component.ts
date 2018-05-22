import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo'
import {TodoService} from '../todo.service'
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo ;

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  removeTodo(event,{id}) {
    event.stopPropagation()
    this.todoService.deleteTodoById(id)
  }
  toggleTodo(event, todo) {
    event.stopPropagation()
    this.todoService.toggleTodoComplete(todo)
  }
}
