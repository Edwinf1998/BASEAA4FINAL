import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Abarrotes } from '../abarrotes';
import { AbarrotesService } from '../abarrotes.service';

@Component({
  selector: 'app-modificar-abarrotes',
  templateUrl: './modificar-abarrotes.component.html',
  styleUrls: ['./modificar-abarrotes.component.css']
})
export class ModificarAbarrotesComponent implements OnInit {

  id:number;
  aba:Abarrotes = new Abarrotes();
  constructor(private abaservi:AbarrotesService, private route:Router, private routes:ActivatedRoute) { }

  ngOnInit(): void {

    this.id=this.routes.snapshot.params['id'];
    this.abaservi.obtenerAbarrotesUnico(this.id).subscribe(dato =>{
      this.aba = dato;
    })
  }

  irListaAbarrotes(){
    this.route.navigate(['./ListarAba']);
  }

OnSubmit(){
  this.abaservi.actualizarAbarrotes(this.id,this.aba).subscribe(dato =>{
    this.irListaAbarrotes();
  })
}


}
