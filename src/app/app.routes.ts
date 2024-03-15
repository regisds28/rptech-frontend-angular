import { Routes } from '@angular/router';
import { ProjetosComponent } from './projetos/projetos/projetos.component';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'projetos'
  },
  {
    path: 'projetos',
    loadChildren: () => import('./projetos/projetos.module').then(m => m.ProjetosModule)
  }
];
