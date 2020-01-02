import { Task, categories } from '../Data/task'
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'taskify-task-row-template',
  templateUrl: './task-row-template.component.html',
  styleUrls: ['./task-row-template.component.css']
})
export class TaskRowTemplateComponent implements OnInit {
  @Input() task: Task;
  isDeadline: boolean;
  isDeadlined(): boolean {
    return !this.task.deadLine || new Date().getTime() >= this.task.deadLine.getTime();
  }

  getCategory(category: number) {
    return categories[category];
  }

  constructor() { }

  ngOnInit() {
    this.isDeadline = this.isDeadlined();
  }

}
