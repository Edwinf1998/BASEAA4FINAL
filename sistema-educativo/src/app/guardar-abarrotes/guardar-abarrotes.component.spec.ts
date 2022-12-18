import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarAbarrotesComponent } from './guardar-abarrotes.component';

describe('GuardarAbarrotesComponent', () => {
  let component: GuardarAbarrotesComponent;
  let fixture: ComponentFixture<GuardarAbarrotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarAbarrotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarAbarrotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
