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



  Usuario: Usuario = new Usuario
  confirmarSenha: string
  tipoUser: string
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
    this.Usuario.tipo = this.tipoUser

    if(this.Usuario.senha != this.confirmarSenha){
      alert('As senhas estão incorretas.')

    } else {
      this.authService.cadastrar(this.Usuario).subscribe((resp: Usuario) => {
        this.Usuario = resp
        this.router.navigate(['/login'])
        alert('Usuário Cadastrado com sucesso!')
      })
    }
  }

}
