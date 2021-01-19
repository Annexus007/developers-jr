import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../clientes.service';
import { GrupoCliente } from '../grupoCliente';

@Component({
  selector: 'app-cadastra-grupo',
  templateUrl: './cadastra-grupo.component.html',
  styleUrls: ['./cadastra-grupo.component.scss']
})
export class CadastraGrupoComponent implements OnInit {
  grupo = {} as GrupoCliente

  constructor(private service: ClientesService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  cadastraGrupo(grupo): void{
    this.service.cadastraGrupo(grupo).subscribe(() => {
      this.service.exibeMensagem("Grupo cadastrado com sucesso!");

      this.router.navigate([""]);
    });
  }

  cancelar(){
    this.router.navigate([""]);
  }

}
