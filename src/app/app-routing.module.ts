import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from 'shared/components/blank/blank.component';

const routes: Routes = [
  {
    path: '**',
    component: BlankComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
