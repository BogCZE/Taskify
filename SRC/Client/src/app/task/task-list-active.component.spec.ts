import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListActiveComponent } from './task-list-active.component';

describe('TaskListActiveComponent', () => {
  let component: TaskListActiveComponent;
  let fixture: ComponentFixture<TaskListActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
