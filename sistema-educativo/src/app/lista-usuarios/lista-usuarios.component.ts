import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from '../usuarios';
import { UsuariosService } from '../usuarios.service';
import { ModificarUsuariosComponent } from '../modificar-usuarios/modificar-usuarios.component';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
  providers : [DatePipe] 
})
export class ListaUsuariosComponent implements OnInit {

  listaUsuarios:Usuarios[];
  constructor(private ususervi:UsuariosService, private router:Router){}

  ngOnInit(): void {
    this.ejecutarServicioObtener();
  }
  private ejecutarServicioObtener (){
    this.ususervi.obtenerUsuarios().subscribe(listasuarios2 =>{
      console.log(listasuarios2);
      this.listaUsuarios=listasuarios2
    }
    )
  }

  actualizarUsuarios(idusuariosedwin:number){
    this.router.navigate(['./modificar',idusuariosedwin]);
  }
  
  eliminarUsuarios(idusuariosedwin:number){
    this.ususervi.eliminarUsuarios(idusuariosedwin).subscribe(dato =>{
    this.ejecutarServicioObtener();
  });
}

}
