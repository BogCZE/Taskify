import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListActiveComponent } from './Components/task-list-active.component';
import { TaskRowTemplateComponent } from './Components/task-row-template.component';
import { CoreModule } from '../Core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    TaskListActiveComponent
  ],
  declarations: [
    TaskListActiveComponent,
    TaskRowTemplateComponent

  ]
})
export class TaskModule { }
