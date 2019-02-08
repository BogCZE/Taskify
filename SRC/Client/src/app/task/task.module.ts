import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListActiveComponent } from './task-list-active.component';
import { TaskRowTemplateComponent } from './task-row-template.component';
import { PreviewPipe } from '../pipes/preview.pipe';
import { MaterialDesignModule } from '../material-design/material-design.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule
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
