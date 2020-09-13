import { Injectable } from '@angular/core';
import { TodoItem } from '@modern-web-nx-demo/todos/todos-data-access';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: TodoItem[] = [
    {
      id: 1,
      label: 'Item 1',
      done: true
    },
    {
      id: 2,
      label: 'Item 2',
      done: false
    }
  ];

  constructor() {
  }

  getTodos(): Observable<TodoItem[]> {
    return of(this.todos);
  }

  setTodoItem(todoItem: TodoItem) {
    this.todos = this.todos.reduce((prevItem, currItem) => {
      if (currItem.id === todoItem.id) {
        return [...prevItem, { ...todoItem }];
      }
      return [...prevItem, { ...currItem }];
    }, [] as TodoItem[]);
    return of(null);
  }

}
