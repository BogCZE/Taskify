
import { Task } from '../Data/task';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../Services/task.service';


@Component({
  selector: 'taskify-task-list-active',
  templateUrl: './task-list-active.component.html',
  styleUrls: ['./task-list-active.component.css'],
  providers: [TaskService]
})
export class TaskListActiveComponent implements OnInit {

  selectedTask: Task;
  constructor(private taskService: TaskService) { }
  activeTasks$: Observable<Task[]>;

  ngOnInit() {
    this.activeTasks$ = this.taskService.getActiveTasks();
  }

  trackBy() {
    console.log(arguments);
  }
}
