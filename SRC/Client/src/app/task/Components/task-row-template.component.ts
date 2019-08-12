import { Task, categories } from '../Data/task'
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'taskify-task-row-template',
  templateUrl: './task-row-template.component.html',
  styleUrls: ['./task-row-template.component.css']
})
export class TaskRowTemplateComponent implements OnInit {
  @Input() task: Task;
  isDeadlined(): boolean {
    const isDanger = !this.task.DeadLine || new Date().getTime() >= this.task.DeadLine.getTime();
    return isDanger;
  }

  isBeforeDeadline() {
    let currentDate = new Date();
    let fiveDaysBeforeDeadlineDate = new Date(new Date(new Date().setHours(0, 0, 0, 0)).getTime() - 5 * 1000 * 60 * 60 * 24);
    console.log(currentDate);
    console.log(fiveDaysBeforeDeadlineDate);
    return this.task.DeadLine;
  }
  getCategory(category: number) {
    return categories[category];
  }
  constructor() { }

  ngOnInit() {
  }

}
