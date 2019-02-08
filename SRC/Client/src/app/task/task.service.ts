import { Injectable } from '@angular/core';
import { Task, categories } from './task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getActiveTasks(): Observable<Task[]> {
    return of([
      <Task>{
        Id: 0,
        Identification: "Angular app",
        Description: "Created angular app",
        DesiredHours: 160,
        ExpectedBudget: 25000,
        Active: true,
        DeadLine:  new Date(2018, 12, 30),
        Category: categories.Angular
      },
      <Task>{
        Id: 1,
        Identification: "Angular app",
        Description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Nullam faucibus mi quis velit. Curabitur sagittis hendrerit ante. Integer lacinia. Aliquam ante. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Integer lacinia. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Quisque tincidunt scelerisque libero. Curabitur vitae diam non enim vestibulum interdum. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nullam faucibus mi quis velit. Praesent in mauris eu tortor porttitor accumsan. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        DesiredHours: 160,
        ExpectedBudget: 25000,
        Active: true,
        DeadLine:  new Date(2018, 2, 30),
        Category: categories.Angular
      },
      <Task>{
        Id: 2,
        Identification: "Angular app",
        Description: "Created angular app",
        DesiredHours: 160,
        ExpectedBudget: 25000,
        Active: true,
        DeadLine:  new Date(2018, 12, 30),
        Category: categories["C#"]
      },
      <Task>{
        Id: 3,
        Identification: "Angular app",
        Description: "Created angular app",
        DesiredHours: 160,
        ExpectedBudget: 25000,
        Active: true,
        DeadLine:  new Date(2018, 5, 30),
        Category: categories.PHP
      },
      <Task>{
        Id: 4,
        Identification: "Angular app",
        Description: "Created angular app",
        DesiredHours: 160,
        ExpectedBudget: 25000,
        Active: true,
        DeadLine:  new Date(2018, 12, 30),
        Category: categories["C#"]
      },
      <Task>{
        Id: 5,
        Identification: "Angular app",
        Description: "Created angular app",
        DesiredHours: 160,
        ExpectedBudget: 25000,
        Active: true,
        DeadLine:  new Date(2018, 12, 30),
        Category: categories.Angular
      },
      <Task>{
        Id: 6,
        Identification: "Angular app",
        Description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Nullam faucibus mi quis velit. Curabitur sagittis hendrerit ante. Integer lacinia. Aliquam ante. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Integer lacinia. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Quisque tincidunt scelerisque libero. Curabitur vitae diam non enim vestibulum interdum. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nullam faucibus mi quis velit. Praesent in mauris eu tortor porttitor accumsan. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        DesiredHours: 160,
        ExpectedBudget: 25000,
        Active: true,
        DeadLine:  new Date(2018, 12, 30),
        Category: categories.PHP
      },
      <Task>{
        Id: 7,
        Identification: "Angular app",
        Description: "Created angular app",
        DesiredHours: 160,
        ExpectedBudget: 25000,
        Active: true,
        DeadLine:  new Date(2018, 12, 30),
        Category: categories.Angular
      },
    ]);
  }
}
