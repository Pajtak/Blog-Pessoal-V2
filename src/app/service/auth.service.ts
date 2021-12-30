import { UsuarioLogin } from './../model/usuarioLogin';
import { Usuario } from './../model/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>(
      'https://blogpessoalpajtak.herokuapp.com/usuarios/logar',
      usuarioLogin
    );
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(
      'https://blogpessoalpajtak.herokuapp.com/usuarios/cadastrar',
      usuario
    )
  }

logado(){
  let ok: boolean = false
  
  if(environment.token != ''){
    ok = true
  }
  
  return ok
}
}
