import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageWallComponent } from './message-wall.component';

describe('MessageWallComponent', () => {
  let component: MessageWallComponent;
  let fixture: ComponentFixture<MessageWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
