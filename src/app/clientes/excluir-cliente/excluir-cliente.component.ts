import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Router, ActivatedRoute } from "@angular/router";
import { Cliente } from '../cliente';
import { SubSink } from "subsink";

@Component({
  selector: 'app-excluir-cliente',
  templateUrl: './excluir-cliente.component.html',
  styleUrls: ['./excluir-cliente.component.scss']
})
export class ExcluirClienteComponent implements OnInit {
  private sub = new SubSink();
  cliente: Cliente
  id: number

  constructor(private service: ClientesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");

    this.sub.sink = this.service
      .buscaCliente(id)
      .subscribe((cliente) => {
        this.cliente = cliente;
      });
  }

  excluir(): void {
    this.service
      .excluir(this.cliente.id)
      .subscribe(() => {
        this.service.exibeMensagem(
          "Cliente excluído com sucesso!"
        );
        this.router.navigate([""]);
      });
  }

  cancelar(): void {
    this.router.navigate([""]);
  }

}
