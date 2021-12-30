import { Router } from '@angular/router';

import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  constructor(
    private router: Router
  ) { }


  ngOnInit() {

    if(environment.token == ''){
      alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['/login'])
    }
  }
  sair(){
    this.router.navigate(['/login'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }
}
