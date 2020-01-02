import { Injectable } from '@angular/core';
import { Task, categories } from '../Data/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getActiveTasks(): Observable<Task[]> {
    return of([
      <Task>{
        id: 0,
        identification: "Angular app",
        description: "Created angular app",
        desiredHours: 160,
        expectedBudget: 25000,
        active: true,
        deadLine:  new Date(2018, 12, 30),
        category: categories.Angular,
        tags: [{id: 1, name: 'Angular'}, {id: 2, name: 'C#'}]
      },
      <Task>{
        id: 1,
        identification: "Angular app",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Nullam faucibus mi quis velit. Curabitur sagittis hendrerit ante. Integer lacinia. Aliquam ante. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Integer lacinia. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Quisque tincidunt scelerisque libero. Curabitur vitae diam non enim vestibulum interdum. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nullam faucibus mi quis velit. Praesent in mauris eu tortor porttitor accumsan. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        desiredHours: 160,
        expectedBudget: 25000,
        active: true,
        deadLine:  new Date(2018, 2, 30),
        category: categories.Angular,
        tags: [{id: 1, name: 'Angular'}, {id: 2, name: 'C#'}]
      },
      <Task>{
        id: 2,
        identification: "Angular app",
        description: "Created angular app",
        desiredHours: 160,
        expectedBudget: 25000,
        active: true,
        deadLine:  new Date(2018, 12, 30),
        category: categories["C#"],
        tags: [{id: 1, name: 'Angular'}, {id: 2, name: 'C#'}]
      },
      <Task>{
        id: 3,
        identification: "Angular app",
        description: "Created angular app",
        desiredHours: 160,
        expectedBudget: 25000,
        active: true,
        deadLine:  new Date(2018, 5, 30),
        category: categories.PHP,
        tags: [{id: 1, name: 'Angular'}, {id: 2, name: 'C#'}]
      },
      <Task>{
        id: 4,
        identification: "Angular app",
        description: "Created angular app",
        desiredHours: 160,
        expectedBudget: 25000,
        active: true,
        deadLine:  new Date(2018, 12, 30),
        category: categories["C#"]
      },
      <Task>{
        id: 5,
        identification: "Angular app",
        description: "Created angular app",
        desiredHours: 160,
        expectedBudget: 25000,
        active: true,
        deadLine:  new Date(2018, 12, 30),
        category: categories.Angular
      },
      <Task>{
        id: 6,
        identification: "Angular app",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Nullam faucibus mi quis velit. Curabitur sagittis hendrerit ante. Integer lacinia. Aliquam ante. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Integer lacinia. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Quisque tincidunt scelerisque libero. Curabitur vitae diam non enim vestibulum interdum. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nullam faucibus mi quis velit. Praesent in mauris eu tortor porttitor accumsan. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        desiredHours: 160,
        expectedBudget: 25000,
        active: true,
        deadLine:  new Date(2018, 12, 30),
        category: categories.PHP
      },
      <Task>{
        id: 7,
        identification: "Angular app",
        description: "Created angular app",
        desiredHours: 160,
        expectedBudget: 25000,
        active: true,
        deadLine:  new Date(2018, 12, 30),
        category: categories.Angular
      },
    ]);
  }
}
