import { environment } from './../../environments/environment.prod';
import { UsuarioLogin } from './../model/usuarioLogin';
import { AuthService } from './../service/auth.service';
import { Usuario } from './../model/usuario';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  usuario: Usuario = new Usuario
  confirmarSenha: string
  tipoUser: string
  usuarioLogin: UsuarioLogin = new UsuarioLogin

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)

  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  tipoUsuario(event:any){
    this.tipoUser = event.target.value
  }

  cadastrar(){
    this.usuario.tipo = this.tipoUser

    if(this.usuario.senha != this.confirmarSenha){
      alert('As senhas estão incorretas.')

    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
      
        alert('Usuário Cadastrado com sucesso!')
      })
    }
  }

  entrar(){
    this.authService.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp
      
      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.id = this.usuarioLogin.idUsuario
      environment.foto = this.usuarioLogin.foto

      this.router.navigate(['/inicio'])
    }, erro => {
      if(erro.status != 200){
        alert('Usuário ou senha estão incorretos')
      }    
    }
      
    )

  }
}
