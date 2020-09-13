import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TodosTodosDataAccessModule } from '@modern-web-nx-demo/todos/todos-data-access';
import { TodosTodosUiModule } from '@modern-web-nx-demo/todos/todos-ui';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    TodosTodosUiModule,
    TodosTodosDataAccessModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
