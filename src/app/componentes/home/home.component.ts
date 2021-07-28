import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/clientes';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  listaCliente : Cliente[]= []; 
  
  ngOnInit(): void {
  }

}
