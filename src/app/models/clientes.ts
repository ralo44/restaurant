export class Cliente {
   _id?:number;
   nombre:string;
   apellido:string;
   fechaCumple:string;
   email:string;
   telefono:string;
   rfc: string;

   constructor(nombre: string, apellido:string,  fechaCumple:string, email:string, telefono:string,  rfc: string  ){
      this.nombre = nombre;
      this.apellido = apellido;
      this.fechaCumple = fechaCumple;
      this.email = email;
      this.telefono = telefono;
      this.rfc = rfc;
   }
}
