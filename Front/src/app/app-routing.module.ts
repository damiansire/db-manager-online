import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BdTableCreatorComponent } from './bd-table-creator/bd-table-creator.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path:  'home', component: PrincipalComponent },
  { path:  'createTable', component:  BdTableCreatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
