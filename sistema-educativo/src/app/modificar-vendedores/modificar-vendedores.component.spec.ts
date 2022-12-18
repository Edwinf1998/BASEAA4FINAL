import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarVendedoresComponent } from './modificar-vendedores.component';

describe('ModificarVendedoresComponent', () => {
  let component: ModificarVendedoresComponent;
  let fixture: ComponentFixture<ModificarVendedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarVendedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarVendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
