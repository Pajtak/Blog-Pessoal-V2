import { UsuarioLogin } from './../model/usuarioLogin';
import { Usuario } from './../model/usuario';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin):Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('http://blogpessoalpajtak.herokuapp.com/usuarios/logar', usuarioLogin)

  }

  cadastrar (usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>('https://blogpessoalpajtak.herokuapp.com/usuarios/cadastrar', usuario)  }
}
