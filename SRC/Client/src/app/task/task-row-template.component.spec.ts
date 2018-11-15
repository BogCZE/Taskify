import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRowTemplateComponent } from './task-row-template.component';

describe('TaskRowTemplateComponent', () => {
  let component: TaskRowTemplateComponent;
  let fixture: ComponentFixture<TaskRowTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskRowTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRowTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
