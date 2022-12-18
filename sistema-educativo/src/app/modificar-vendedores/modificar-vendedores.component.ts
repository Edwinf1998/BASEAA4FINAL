import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendedores } from '../vendedores';
import { VendedoresService } from '../vendedores.service';

@Component({
  selector: 'app-modificar-vendedores',
  templateUrl: './modificar-vendedores.component.html',
  styleUrls: ['./modificar-vendedores.component.css']
})
export class ModificarVendedoresComponent implements OnInit {

  id:number;
  ven:Vendedores = new Vendedores();
  constructor(private venservi:VendedoresService, private route:Router, private routes:ActivatedRoute) { }

  ngOnInit(): void {

    this.id=this.routes.snapshot.params['id'];
    this.venservi.obtenerVendedoresUnico(this.id).subscribe(dato =>{
      this.ven = dato;
    })
  }

  irListaVendedores(){
    this.route.navigate(['./ListarVen']);
  }

OnSubmit(){
  this.venservi.actualizarVendedores(this.id,this.ven).subscribe(dato =>{
    this.irListaVendedores();
  })
}


}
