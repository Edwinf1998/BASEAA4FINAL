import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from '../usuarios';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-modificar-usuarios',
  templateUrl: './modificar-usuarios.component.html',
  styleUrls: ['./modificar-usuarios.component.css']
})
export class ModificarUsuariosComponent implements OnInit {

  id:number;
  usu:Usuarios = new Usuarios();
  constructor(private ususervi:UsuariosService, private route:Router, private routes:ActivatedRoute) { }

  ngOnInit(): void {

    this.id=this.routes.snapshot.params['id'];
    this.ususervi.obtenerUsuariosUnico(this.id).subscribe(dato =>{
      this.usu = dato;
    })
  }

  irListaUsuarios(){
    this.route.navigate(['./ListarUsu']);
  }

OnSubmit(){
  this.ususervi.actualizarUsuarios(this.id,this.usu).subscribe(dato =>{
    this.irListaUsuarios();
  })
}


}
