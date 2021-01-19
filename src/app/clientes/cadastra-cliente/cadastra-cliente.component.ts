import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../cliente';
import { GrupoCliente } from '../grupoCliente';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastra-cliente',
  templateUrl: './cadastra-cliente.component.html',
  styleUrls: ['./cadastra-cliente.component.scss'],
})
export class CadastraClienteComponent implements OnInit {
  datemask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, ':',/\d/, /\d/, ' ',];
  cliente = {} as Cliente;
  grupos = []

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: ClientesService) { }

  ngOnInit(): void {
    this.service.buscaGruposCliente().subscribe(grupo => {
      this.grupos.push(grupo)
    })
  }

  cadastraCliente(cliente): void {
    this.cliente.dataCadastro = new Date().toString();
    this.service.cadastra(cliente).subscribe(() => {
      this.service.exibeMensagem("Cliente cadastrado com sucesso!");

      this.router.navigate([""]);
    });
  }

  cancelar(): void {
    this.router.navigate([""]);
  }

}
