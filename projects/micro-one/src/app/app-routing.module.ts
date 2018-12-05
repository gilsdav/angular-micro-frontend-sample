import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoucouComponent } from './components/coucou/coucou.component';
import { environment } from '../environments/environment';
import { BlankComponent } from 'shared/components/blank/blank.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: BlankComponent
  },
  {
    path: 'coucou',
    component: CoucouComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
