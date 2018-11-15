import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';
import { Observable, of, interval, from } from 'rxjs';
import { map, combineAll, take, combineLatest, switchMap, flatMap } from 'rxjs/operators';


@Component({
  selector: 'taskify-task-list-active',
  templateUrl: './task-list-active.component.html',
  styleUrls: ['./task-list-active.component.css'],
  providers: [TaskService]
})
export class TaskListActiveComponent implements OnInit {

  selectedTask: Task;
  constructor(private taskService: TaskService) { }
  activeTasks: Observable<Task[]>;

  ngOnInit() {
    this.activeTasks = this.taskService.getActiveTasks();
  }

  trackBy() {
    console.log(arguments);
  }

  click(task: Task) {
    console.log(arguments);
    if (this.isSelected(task)) {
      this.selectedTask = null;
    }
    else {
      this.selectedTask = task;
    }
  }

  isSelected(task: Task) {
    return this.selectedTask == task;
  }

  isHidden(task: Task) {
    console.log(this.selectedTask!= null && !this.isSelected(task));
    return this.selectedTask != null && !this.isSelected(task);
  }

}
