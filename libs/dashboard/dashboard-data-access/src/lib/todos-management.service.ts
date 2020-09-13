import { Injectable } from '@angular/core';
import { TodoItem, TodosService } from '@modern-web-nx-demo/todos/todos-data-access';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosManagementService {

  constructor(private todosService: TodosService) {
  }

  getTodos() {
    return this.todosService.getTodos();
  }

  setTodoItem(todoItem: TodoItem) {
    return this.todosService.setTodoItem(todoItem);
  }

  addTodoItem(text: string):Observable<any> {
    this.todosService.todos = [...this.todosService.todos, {
      id: this.todosService.todos.length + 1,
      label: text,
      done: false
    }];
    return of(null);
  }
}
