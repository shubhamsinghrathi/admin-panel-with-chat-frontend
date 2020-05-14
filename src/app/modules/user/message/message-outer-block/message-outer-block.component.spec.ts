import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageOuterBlockComponent } from './message-outer-block.component';

describe('MessageOuterBlockComponent', () => {
  let component: MessageOuterBlockComponent;
  let fixture: ComponentFixture<MessageOuterBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageOuterBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageOuterBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
