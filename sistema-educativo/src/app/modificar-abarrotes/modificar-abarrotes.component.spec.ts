import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAbarrotesComponent } from './modificar-abarrotes.component';

describe('ModificarAbarrotesComponent', () => {
  let component: ModificarAbarrotesComponent;
  let fixture: ComponentFixture<ModificarAbarrotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarAbarrotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarAbarrotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
