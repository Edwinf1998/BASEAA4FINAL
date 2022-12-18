import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedores } from '../proveedores';
import { ProveedoresService } from '../proveedores.service';

@Component({
  selector: 'app-modificar-proveedores',
  templateUrl: './modificar-proveedores.component.html',
  styleUrls: ['./modificar-proveedores.component.css']
})
export class ModificarProveedoresComponent implements OnInit {

  id:number;
  pro:Proveedores = new Proveedores();
  constructor(private proservi:ProveedoresService, private route:Router, private routes:ActivatedRoute) { }

  ngOnInit(): void {

    this.id=this.routes.snapshot.params['id'];
    this.proservi.obtenerProveedoresUnico(this.id).subscribe(dato =>{
      this.pro = dato;
    })
  }

  irListaProveedores(){
    this.route.navigate(['./ListarPro']);
  }

OnSubmit(){
  this.proservi.actualizarProveedores(this.id,this.pro).subscribe(dato =>{
    this.irListaProveedores();
  })
}


}
