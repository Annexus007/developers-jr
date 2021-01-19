import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { SubSink } from 'subsink';
import { Cliente } from '../cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss'],
})
export class ListaClientesComponent implements OnInit {
  clientes: Cliente[];
  colunasExibidas = ['id', 'Nome', 'Cpf', 'DataCadastro', 'grupoCliente', 'Ativo', 'Telefone', 'action'];
  private sub = new SubSink();

  constructor(private clientesService: ClientesService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.sub.sink = this.clientesService.buscarClientes().subscribe(clientes => {
      this.clientes = clientes
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  cadastraCliente(){
    this.router.navigate(["cadastrar"]);
  }

  cadastraGrupo(){
    this.router.navigate(["cadastrarGrupo"]);
  }

}
