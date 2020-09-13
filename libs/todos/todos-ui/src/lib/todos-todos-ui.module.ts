import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  imports: [CommonModule, MatListModule, MatCheckboxModule],
  declarations: [TodoListComponent],
  exports: [TodoListComponent],
})
export class TodosTodosUiModule {}
