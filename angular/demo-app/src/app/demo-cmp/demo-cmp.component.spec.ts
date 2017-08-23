import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCmpComponent } from './demo-cmp.component';

describe('DemoCmpComponent', () => {
  let component: DemoCmpComponent;
  let fixture: ComponentFixture<DemoCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
