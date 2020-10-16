import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFinderComponent } from './grid-finder.component';

describe('GridFinderComponent', () => {
  let component: GridFinderComponent;
  let fixture: ComponentFixture<GridFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
