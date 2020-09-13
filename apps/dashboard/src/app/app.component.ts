import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { TodosManagementService } from '@modern-web-nx-demo/dashboard/dashboard-data-access';
import { TodoItem } from '@modern-web-nx-demo/todos/todos-data-access';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'modern-web-nx-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {

  refresh$ = new Subject();

  todos$ = this.refresh$.pipe(
    switchMap(() => this.todosManagementService.getTodos())
  );

  constructor(private todosManagementService: TodosManagementService) {
  }

  ngAfterViewInit() {
    this.refresh$.next();
  }

  ngOnDestroy() {
    this.refresh$.unsubscribe();
    this.refresh$.complete();
  }

  setTodoItem(item: TodoItem) {
    this.todosManagementService.setTodoItem(item).subscribe(() => {
      this.refresh$.next();
    });
  }

  addTodo(text: string) {
    this.todosManagementService.addTodoItem(text).subscribe(() => {
      this.refresh$.next();
    })
  }
}
