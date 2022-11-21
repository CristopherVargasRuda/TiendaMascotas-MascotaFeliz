export class Usuario {
    cedula: string;
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    contrasena: string;
    rol: string;



    constructor( cedula: string,nombre: string,apellido: string, telefono: string, correo: string, contrasena: string,rol: string){
        this.cedula=cedula;
        this.nombre=nombre;
        this.apellido= apellido;
        this.telefono= telefono;
        this.correo= correo;
        this.contrasena= contrasena;
        this.rol= rol;
    }
  }
