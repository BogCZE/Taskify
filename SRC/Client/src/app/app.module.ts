import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskModule } from './task/task.module';
import { NavigationComponent } from './Navigation/navigation.component';

import { RouterModule, Routes } from '@angular/router';
import { TaskListActiveComponent } from './task/task-list-active.component';
import { FooterComponent } from './Footer/footer.component';
import { CoreModule } from './Core/core.module';


const Routes = [
  { path: "", component: TaskListActiveComponent, pathMatch: 'full' },
  { path: "Tasks", component: TaskListActiveComponent},
  { path: '**', component: TaskListActiveComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    TaskModule,
    CoreModule,
    RouterModule.forRoot(Routes)

  ],
  providers: [],
  bootstrap: [AppComponent, NavigationComponent, FooterComponent]
})
export class AppModule { }
