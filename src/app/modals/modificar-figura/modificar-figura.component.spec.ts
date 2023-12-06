import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarFiguraComponent } from './modificar-figura.component';

describe('ModificarFiguraComponent', () => {
  let component: ModificarFiguraComponent;
  let fixture: ComponentFixture<ModificarFiguraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarFiguraComponent]
    });
    fixture = TestBed.createComponent(ModificarFiguraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
