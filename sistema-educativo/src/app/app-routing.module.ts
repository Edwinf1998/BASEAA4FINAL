import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { GuardarUsuariosComponent } from './guardar-usuarios/guardar-usuarios.component';
import { ModificarUsuariosComponent } from './modificar-usuarios/modificar-usuarios.component';

import { ListaVendedoresComponent } from './lista-vendedores/lista-vendedores.component';
import { GuardarVendedoresComponent } from './guardar-vendedores/guardar-vendedores.component';
import { ModificarVendedoresComponent } from './modificar-vendedores/modificar-vendedores.component';


import { ListaProveedoresComponent } from './lista-proveedores/lista-proveedores.component';
import { GuardarProveedoresComponent } from './guardar-proveedores/guardar-proveedores.component';
import { ModificarProveedoresComponent } from './modificar-proveedores/modificar-proveedores.component';

import { ListaAbarrotesComponent } from './lista-abarrotes/lista-abarrotes.component';
import { GuardarAbarrotesComponent } from './guardar-abarrotes/guardar-abarrotes.component';
import { ModificarAbarrotesComponent } from './modificar-abarrotes/modificar-abarrotes.component';


const routes: Routes = [
{path:"ListarUsu", component:ListaUsuariosComponent,},
{path:"", redirectTo:"ListarUsu",pathMatch:"full"},
{path:"guardar", component:GuardarUsuariosComponent},
{path:"modificar/:id", component:ModificarUsuariosComponent},

{path:"ListarVen", component:ListaVendedoresComponent,},
{path:"", redirectTo:"ListarVen",pathMatch:"full"},
{path:"guardar", component:GuardarVendedoresComponent},
{path:"modificar/:id", component:ModificarVendedoresComponent},

{path:"ListarPro", component:ListaProveedoresComponent,},
{path:"", redirectTo:"ListarPro",pathMatch:"full"},
{path:"guardar", component:GuardarProveedoresComponent},
{path:"modificar/:id", component:ModificarProveedoresComponent},


{path:"ListarAba", component:ListaAbarrotesComponent,},
{path:"", redirectTo:"ListarAba",pathMatch:"full"},
{path:"guardar", component:GuardarAbarrotesComponent},
{path:"modificar/:id", component:ModificarAbarrotesComponent}


];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



