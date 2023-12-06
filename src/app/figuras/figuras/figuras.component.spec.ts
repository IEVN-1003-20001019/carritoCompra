import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigurasComponent } from './figuras.component';

describe('FigurasComponent', () => {
  let component: FigurasComponent;
  let fixture: ComponentFixture<FigurasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FigurasComponent]
    });
    fixture = TestBed.createComponent(FigurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
