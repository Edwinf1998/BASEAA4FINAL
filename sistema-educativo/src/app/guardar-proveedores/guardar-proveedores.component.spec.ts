import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarProveedoresComponent } from './guardar-proveedores.component';

describe('GuardarProveedoresComponent', () => {
  let component: GuardarProveedoresComponent;
  let fixture: ComponentFixture<GuardarProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarProveedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
