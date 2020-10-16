import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOnlineComponent } from './grid-online.component';

describe('GridOnlineComponent', () => {
  let component: GridOnlineComponent;
  let fixture: ComponentFixture<GridOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
