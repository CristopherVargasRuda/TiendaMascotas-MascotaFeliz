
import { Component, OnInit } from '@angular/core';
import {Usuario} from './lista-usarios.componet.usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  
  listaUsuarios:Array<any> = new Array();
  usuarioMostron:Usuario = new Usuario("","","","","","","");


  constructor() {
    fetch("http://localhost:3000/usuarios",{
      method: 'get'
  }).then(res => res.json())
  .then(mensaje =>{
    this.listaUsuarios=mensaje;

  })


   };

  ngOnInit(): void {


  };
  eliminarUsuario(id:string){
    fetch("http://localhost:3000/usuarios/"+id,
    {
      method:'DELETE'
    })
  }

mostrarUsuario(id:string){
  fetch("http://localhost:3000/usuarios/"+id,
  {
    method:'get'
  }).then(res=>res.json()).then(
    usuario=>{
      this.usuarioMostron= new Usuario(usuario.cedula,usuario.nombre,
        usuario.apellido,usuario.telefono,usuario.correo,
        usuario.comentario,usuario.rol)
    }
  )
}


}
