import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAbarrotesComponent } from './lista-abarrotes.component';

describe('ListaAbarrotesComponent', () => {
  let component: ListaAbarrotesComponent;
  let fixture: ComponentFixture<ListaAbarrotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAbarrotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAbarrotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
