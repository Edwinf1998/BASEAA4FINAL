import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Abarrotes } from '../abarrotes';
import { AbarrotesService } from '../abarrotes.service';

@Component({
  selector: 'app-guardar-abarrotes',
  templateUrl: './guardar-abarrotes.component.html',
  styleUrls: ['./guardar-abarrotes.component.css']
})
export class GuardarAbarrotesComponent implements OnInit {

  aba:Abarrotes = new Abarrotes();

  constructor(private abaservi:AbarrotesService, private router:Router) { }

  ngOnInit(): void {
  }

  ejecutarguardarabarrotes(){
    this.abaservi.registrarAbarrotes(this.aba).subscribe(dato=>{
      this.router.navigate(["/ListarAba"]);
      console.log(dato);
    })
  }
  
  OnSubmit(){
    this.ejecutarguardarabarrotes();
  }
}
