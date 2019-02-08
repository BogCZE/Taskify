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
}
