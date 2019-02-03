import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeamComponent } from './peam.component';

describe('PeamComponent', () => {
  let component: PeamComponent;
  let fixture: ComponentFixture<PeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
