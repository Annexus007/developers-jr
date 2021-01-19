import { Component, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cliente } from './cliente';
import { Observable } from "rxjs";
import { MatSnackBar, MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";
import { GrupoCliente } from "./grupoCliente";

@Injectable()
export class ClientesService {
  [x: string]: any;
  protected UrlService: string = "https://localhost:5001/api/Clientes";
  protected UrlServiceGrupo: string = "https://localhost:5001/api/GrupoClientes";

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  buscarClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.UrlService)
  }

  buscaCliente(id: number): Observable<Cliente>{
    const url = `${this.UrlService}/${id}`;

    return this.http.get<Cliente>(url);
  }

  buscaGruposCliente() : Observable<GrupoCliente[]>{
    return this.http.get<GrupoCliente[]>(this.UrlServiceGrupo);
  }

  atualiza(cliente: Cliente): Observable<Cliente> {
    const url = `${this.UrlService}/${cliente.id}`;

    return this.http.put<Cliente>(url, cliente);
  }

  excluir(id: string): Observable<Cliente> {
    const url = `${this.UrlService}/${id}`;
    return this.http.delete<Cliente>(url);
  }

  cadastra(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.UrlService, cliente);
  }

  cadastraGrupo(grupoCliente: GrupoCliente): Observable<GrupoCliente>{
    return this.http.post<GrupoCliente>(this.UrlServiceGrupo, grupoCliente);
  }

  exibeMensagem(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
}
