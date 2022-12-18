import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendedores } from '../vendedores';
import { VendedoresService } from '../vendedores.service';

@Component({
  selector: 'app-guardar-vendedores',
  templateUrl: './guardar-vendedores.component.html',
  styleUrls: ['./guardar-vendedores.component.css']
})
export class GuardarVendedoresComponent implements OnInit {

  ven:Vendedores = new Vendedores();

  constructor(private venservi:VendedoresService, private router:Router) { }

  ngOnInit(): void {
  }

  ejecutarguardarvendedores(){
    this.venservi.registrarVendedores(this.ven).subscribe(dato=>{
      this.router.navigate(["/ListarVen"]);
      console.log(dato);
    })
  }
  
  OnSubmit(){
    this.ejecutarguardarvendedores();
  }
}
