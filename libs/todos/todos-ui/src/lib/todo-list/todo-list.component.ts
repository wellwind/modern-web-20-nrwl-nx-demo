import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TodoItem } from '@modern-web-nx-demo/todos/todos-data-access';

@Component({
  selector: 'modern-web-nx-demo-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
      @Input() todoList: TodoItem[];

  @Output() todoItemClick = new EventEmitter<TodoItem>();

  constructor() {}

  ngOnInit(): void {}

  emitTodoItemClick(item: TodoItem) {
    this.todoItemClick.emit({ ...item, done: !item.done });
  }
}
