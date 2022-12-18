import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedores } from '../proveedores';
import { ProveedoresService } from '../proveedores.service';
import { ModificarProveedoresComponent } from '../modificar-proveedores/modificar-proveedores.component';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  styleUrls: ['./lista-proveedores.component.css'],
  providers : [DatePipe] 
})
export class ListaProveedoresComponent implements OnInit {

  listaProveedores:Proveedores[];
  constructor(private proservi:ProveedoresService, private router:Router){}

  ngOnInit(): void {
    this.ejecutarServicioObtener();
  }
  private ejecutarServicioObtener (){
    this.proservi.obtenerProveedores().subscribe(listaproveedores2 =>{
      console.log(listaproveedores2);
      this.listaProveedores=listaproveedores2
    }
    )
  }

  actualizarProveedores(idproveedoreserick:number){
    this.router.navigate(['./modificar',idproveedoreserick]);
  }
  
  eliminarProveedores(idproveedoreserick:number){
    this.proservi.eliminarProveedores(idproveedoreserick).subscribe(dato =>{
    this.ejecutarServicioObtener();
  });
}

}