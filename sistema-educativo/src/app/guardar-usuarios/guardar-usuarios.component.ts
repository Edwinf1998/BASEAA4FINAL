import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from '../usuarios';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-guardar-usuarios',
  templateUrl: './guardar-usuarios.component.html',
  styleUrls: ['./guardar-usuarios.component.css']
})
export class GuardarUsuariosComponent implements OnInit {

  usu:Usuarios = new Usuarios();

  constructor(private ususervi:UsuariosService, private router:Router) { }

  ngOnInit(): void {
  }

  ejecutarguardarusuarios(){
    this.ususervi.registrarUsuarios(this.usu).subscribe(dato=>{
      this.router.navigate(["/ListarUsu"]);
      console.log(dato);
    })
  }
  
  OnSubmit(){
    this.ejecutarguardarusuarios();
  }
}
