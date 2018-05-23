import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from './todo'
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }
  
  todos: Todo[] = [];

  loadTodos(): void {
    this.http.get(`${environment.baseUrl}?_limit=${environment.limit}`) 
      .subscribe((todos:Todo[]) => this.todos = todos),
        (error: any) => Observable.throw(error);
  }

  loadTodosCorrect():Observable<any> {
    return this.http.get(`${environment.baseUrl}?_limit=${environment.limit}`) 
  }
  
  addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      const previousTodo = this.todos[this.todos.length - 1]
      previousTodo ? todo.id = previousTodo.id + 1 :  todo.id = 1
    }
    this.todos.push(todo);
    return this;
  }

  deleteTodoById(id: number): TodoService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // toggleTodo(id: number, values: Object = {}): Todo {
  //   let todo = this.getTodoById(id);
  //   if (!todo) {
  //     return null;
  //   }
  //   Object.assign(todo, values);
  //   return todo;
  // }

  // getTodoById(id: number): Todo {
  //   return this.todos
  //     .filter(todo => todo.id === id)
  //     .pop();
  // }

}