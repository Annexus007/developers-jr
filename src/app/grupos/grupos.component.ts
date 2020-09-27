import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';

import { Grupo } from 'src/app/models/Grupo';
import { GruposService } from './grupos.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss'],
})
export class GruposComponent implements OnInit {
  grupos: Observable<Grupo[]>;

  constructor(
    private grupoService: GruposService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.grupos = this.grupoService.getGrupos().pipe(
      catchError((error) => {
        console.error(error);
        return EMPTY;
      })
    );
  }

  onEdit(grupo: Grupo) {
    this.router.navigate(['']);
    this.router.navigate(['editar', grupo.grupoId], {state: {grupo}, relativeTo: this.route });
  }

  onDelete(grupo: Grupo) {
    if (confirm(`O grupo ${grupo.nome} será apagado. Tem certeza?`)) {
      this.grupoService.remove(grupo.grupoId);
    }
  }
}
