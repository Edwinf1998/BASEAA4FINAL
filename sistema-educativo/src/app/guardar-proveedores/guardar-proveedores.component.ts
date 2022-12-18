import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedores } from '../proveedores';
import { ProveedoresService } from '../proveedores.service';

@Component({
  selector: 'app-guardar-proveedores',
  templateUrl: './guardar-proveedores.component.html',
  styleUrls: ['./guardar-proveedores.component.css']
})
export class GuardarProveedoresComponent implements OnInit {

  pro:Proveedores = new Proveedores();

  constructor(private proservi:ProveedoresService, private router:Router) { }

  ngOnInit(): void {
  }

  ejecutarguardarproveedores(){
    this.proservi.registrarProveedores(this.pro).subscribe(dato=>{
      this.router.navigate(["/ListarPro"]);
      console.log(dato);
    })
  }
  
  OnSubmit(){
    this.ejecutarguardarproveedores();
  }
}
