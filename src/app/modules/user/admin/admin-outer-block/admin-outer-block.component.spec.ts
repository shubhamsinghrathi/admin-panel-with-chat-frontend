import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOuterBlockComponent } from './admin-outer-block.component';

describe('AdminOuterBlockComponent', () => {
  let component: AdminOuterBlockComponent;
  let fixture: ComponentFixture<AdminOuterBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOuterBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOuterBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
