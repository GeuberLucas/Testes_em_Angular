import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignatureComponent } from './assignature.component';

describe('AssignatureComponent', () => {
  let component: AssignatureComponent;
  let fixture: ComponentFixture<AssignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
