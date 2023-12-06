import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFiguraComponent } from './modal-figura.component';

describe('ModalPeliculaComponent', () => {
  let component: ModalFiguraComponent;
  let fixture: ComponentFixture<ModalFiguraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFiguraComponent]
    });
    fixture = TestBed.createComponent(ModalFiguraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
