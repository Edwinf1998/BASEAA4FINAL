import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendedores } from '../vendedores';
import { VendedoresService } from '../vendedores.service';
import { ModificarVendedoresComponent } from '../modificar-vendedores/modificar-vendedores.component';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-lista-vendedores',
  templateUrl: './lista-vendedores.component.html',
  styleUrls: ['./lista-vendedores.component.css'],
  providers : [DatePipe] 
})
export class ListaVendedoresComponent implements OnInit {

  listaVendedores:Vendedores[];
  constructor(private venservi:VendedoresService, private router:Router){}

  ngOnInit(): void {
    this.ejecutarServicioObtener();
  }
  private ejecutarServicioObtener (){
    this.venservi.obtenerVendedores().subscribe(listavendedores2 =>{
      console.log(listavendedores2);
      this.listaVendedores=listavendedores2
    }
    )
  }

  actualizarVendedores(idvendedorescarlos:number){
    this.router.navigate(['./modificar',idvendedorescarlos]);
  }
  
  eliminarVendedores(idvendedorescarlos:number){
    this.venservi.eliminarVendedores(idvendedorescarlos).subscribe(dato =>{
    this.ejecutarServicioObtener();
  });
}

}
