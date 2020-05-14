import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageWallCardComponent } from './message-wall-card.component';

describe('MessageWallCardComponent', () => {
  let component: MessageWallCardComponent;
  let fixture: ComponentFixture<MessageWallCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageWallCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageWallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
