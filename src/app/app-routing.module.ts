import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaClientesComponent } from '../app/clientes/lista-clientes/lista-clientes.component'
import { AtualizaClienteComponent } from './clientes/atualiza-cliente/atualiza-cliente.component';
import { CadastraClienteComponent } from './clientes/cadastra-cliente/cadastra-cliente.component';
import { CadastraGrupoComponent } from './clientes/cadastra-grupo/cadastra-grupo.component';
import { ExcluirClienteComponent } from './clientes/excluir-cliente/excluir-cliente.component';
import { PesquisaComponent } from './clientes/pesquisa/pesquisa.component';

const routes: Routes = [
  {
    path: "",
    component: ListaClientesComponent,
  },
  {
    path: "atualizar/:id",
    component: AtualizaClienteComponent,
  },
  {
    path: "excluir/:id",
    component: ExcluirClienteComponent,
  },
  {
    path: "cadastrar",
    component: CadastraClienteComponent,
  },
  {
    path: "cadastrarGrupo",
    component: CadastraGrupoComponent,
  },
  {
    path: "busca",
    component: PesquisaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
