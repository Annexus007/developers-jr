import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { HttpClientModule } from  '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { ClientesService } from './clientes/clientes.service';
import { CadastraClienteComponent } from './clientes/cadastra-cliente/cadastra-cliente.component';
import { AtualizaClienteComponent } from './clientes/atualiza-cliente/atualiza-cliente.component';
import { ExcluirClienteComponent } from './clientes/excluir-cliente/excluir-cliente.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { CadastraGrupoComponent } from './clientes/cadastra-grupo/cadastra-grupo.component';
import { PesquisaComponent } from './clientes/pesquisa/pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    CadastraClienteComponent,
    AtualizaClienteComponent,
    ExcluirClienteComponent,
    CadastraGrupoComponent,
    PesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
