import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Abarrotes } from '../abarrotes';
import { AbarrotesService } from '../abarrotes.service';
import { ModificarAbarrotesComponent } from '../modificar-abarrotes/modificar-abarrotes.component';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-lista-abarrotes',
  templateUrl: './lista-abarrotes.component.html',
  styleUrls: ['./lista-abarrotes.component.css'],
  providers : [DatePipe] 
})
export class ListaAbarrotesComponent implements OnInit {

  listaAbarrotes:Abarrotes[];
  constructor(private abaservi:AbarrotesService, private router:Router){}

  ngOnInit(): void {
    this.ejecutarServicioObtener();
  }
  private ejecutarServicioObtener (){
    this.abaservi.obtenerAbarrotes().subscribe(listaabarrotes2 =>{
      console.log(listaabarrotes2);
      this.listaAbarrotes=listaabarrotes2
    }
    )
  }

  actualizarAbarrotes(idabarrotesfranco:number){
    this.router.navigate(['./modificar',idabarrotesfranco]);
  }
  
  eliminarAbarrotes(idabarrotesfranco:number){
    this.abaservi.eliminarAbarrotes(idabarrotesfranco).subscribe(dato =>{
    this.ejecutarServicioObtener();
  });
}

}
