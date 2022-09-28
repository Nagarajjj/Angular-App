import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmgrComponent } from './bookmgr.component';

describe('BookmgrComponent', () => {
  let component: BookmgrComponent;
  let fixture: ComponentFixture<BookmgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmgrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
