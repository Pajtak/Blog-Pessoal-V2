import { TemaService } from './../service/tema.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { Tema } from '../model/tema';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {
  nome = environment.nome
  foto = environment.foto
  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  tema: Tema = new Tema()
  listaTemas: Tema[]

  ngOnInit(){
    if(environment.token == ''){
      alert('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['/login'])
    }

    this.findAllTemas()
  }
  sair(){
    this.router.navigate(['/login'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=> {
      this.listaTemas = resp
    })
  }
  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      alert('Tema cadastrado com sucesso!')
      this.findAllTemas()
      this.tema = new Tema()
    })
  }

  }

