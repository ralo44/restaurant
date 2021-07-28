/** 
 * Declara el formulario, con la función agregar cliente se obtienen datos por medio de input y se envia la información al dashboard
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clienteForm: FormGroup;
  titulo = 'Nueva reserva';
  listClientes: any[] = [
   { nickName:'orangel',
     nombre: 'omar',
    apellido: 'rangel',
    fechaCumple: 'formato fecha',
    email: 'rangellomar4@gmail.com',
    telefono: '3311444522',
    rfc: 'ralo8977652823336f2'}
  ];
 
  constructor(
    private fb: FormBuilder,
    private router: Router,

    ) {
      this.clienteForm = this.fb.group({
        nickName: ['', Validators.required],
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        fechaCumple:['', Validators.required],
        email:['', Validators.required],
        telefono:['',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
        rfc:['', Validators.required]
      })
    }
     
  ngOnInit(): void {
  }
  agregarCliente(){
  const CLIENTE: any = {
    nickName: this.clienteForm.get('nickName')?.value,
    nombre: this.clienteForm.get('nombre')?.value,
    apellido: this.clienteForm.get('apellido')?.value,
    fechaCumple: this.clienteForm.get('fechaCumple')?.value,
    email: this.clienteForm.get('email')?.value,
    telefono: this.clienteForm.get('telefono')?.value,
    rfc: this.clienteForm.get('rfc')?.value,
  }

  console.log(CLIENTE);
  this.listClientes.push(CLIENTE);
  this.router.navigate(['/']);
}
}
