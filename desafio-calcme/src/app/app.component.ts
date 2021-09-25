import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'desafio-calcme';
  
  usuario: Usuario = new Usuario();
  submitted = false;
  

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  criarUsuario(): void{
    this.submitted = false;
    this.usuario = new Usuario();
  }

  save() {
    this.usuarioService.criarUsuario(this.usuario)
      .subscribe(data => console.log(data), error => console.log(error));
    this.usuario = new Usuario();
    
  }
  
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}
