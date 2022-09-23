import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaComponent } from './pagina/pagina.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'pagina',
    component: PaginaComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'start'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
