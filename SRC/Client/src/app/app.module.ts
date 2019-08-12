import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskModule } from './task/task.module';

import { RouterModule, Routes } from '@angular/router';
import { TaskListActiveComponent } from './task/Components/task-list-active.component';
import { CoreModule } from './Core/core.module';
import { SharedModule } from './Shared/shared.module';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { NavigationComponent } from './bootstrap/Components/navigation/navigation.component';
import { FooterComponent } from './bootstrap/Components/footer/footer.component';


const Routes = [
  { path: "", component: TaskListActiveComponent, pathMatch: 'full' },
  { path: "Tasks", component: TaskListActiveComponent},
  { path: '**', component: TaskListActiveComponent }
]

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    TaskModule,
    CoreModule,
    SharedModule,
    BootstrapModule,
    RouterModule.forRoot(Routes)

  ],
  providers: [],
  bootstrap: [AppComponent, NavigationComponent, FooterComponent]
})
export class AppModule { }
