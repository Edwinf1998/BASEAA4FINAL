import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import {HttpClientModule} from '@angular/common/http';
import { GuardarUsuariosComponent } from './guardar-usuarios/guardar-usuarios.component';
import { FormsModule } from '@angular/forms';
import { ModificarUsuariosComponent } from './modificar-usuarios/modificar-usuarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';

import { ListaVendedoresComponent } from './lista-vendedores/lista-vendedores.component';
import { GuardarVendedoresComponent } from './guardar-vendedores/guardar-vendedores.component';
import { ModificarVendedoresComponent } from './modificar-vendedores/modificar-vendedores.component';


import { ListaProveedoresComponent } from './lista-proveedores/lista-proveedores.component';
import { GuardarProveedoresComponent } from './guardar-proveedores/guardar-proveedores.component';
import { ModificarProveedoresComponent } from './modificar-proveedores/modificar-proveedores.component';

import { ListaAbarrotesComponent } from './lista-abarrotes/lista-abarrotes.component';
import { GuardarAbarrotesComponent } from './guardar-abarrotes/guardar-abarrotes.component';
import { ModificarAbarrotesComponent } from './modificar-abarrotes/modificar-abarrotes.component';


 


@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    GuardarUsuariosComponent,
    ModificarUsuariosComponent,

    ListaVendedoresComponent,
    GuardarVendedoresComponent,
    ModificarVendedoresComponent,

    ListaProveedoresComponent,
    GuardarProveedoresComponent,
    ModificarProveedoresComponent,

    ListaAbarrotesComponent,
    GuardarAbarrotesComponent,
    ModificarAbarrotesComponent
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
