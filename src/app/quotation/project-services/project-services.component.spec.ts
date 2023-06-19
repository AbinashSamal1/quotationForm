import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectServicesComponent } from './project-services.component';

describe('ProjectServicesComponent', () => {
  let component: ProjectServicesComponent;
  let fixture: ComponentFixture<ProjectServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
