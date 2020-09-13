import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { TodoItem, TodosService } from '@modern-web-nx-demo/todos/todos-data-access';
import { Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'modern-web-nx-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {

  refresh$ = new Subject();

  todos$ = this.refresh$.pipe(
    switchMap(() => this.todosService.getTodos())
  );

  constructor(private todosService: TodosService) {
  }

  ngAfterViewInit() {
    this.refresh$.next();
  }

  ngOnDestroy() {
    this.refresh$.unsubscribe();
    this.refresh$.complete();
  }

  setTodoItem(item: TodoItem) {
    this.todosService.setTodoItem(item).subscribe(() => {
      this.refresh$.next();
    });
  }
}
