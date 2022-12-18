import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarVendedoresComponent } from './guardar-vendedores.component';

describe('GuardarVendedoresComponent', () => {
  let component: GuardarVendedoresComponent;
  let fixture: ComponentFixture<GuardarVendedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarVendedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarVendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
