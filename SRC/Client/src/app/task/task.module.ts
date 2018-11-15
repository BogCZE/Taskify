import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListActiveComponent } from './task-list-active.component';
import { TaskRowTemplateComponent } from './task-row-template.component';
import { PreviewPipe } from '../pipes/preview.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TaskListActiveComponent
  ],
  declarations: [
    TaskListActiveComponent,
    TaskRowTemplateComponent,
    PreviewPipe
  ]
})
export class TaskModule { }
