import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KpiDetailsComponent } from './kpi-details/kpi-details.component';


const routes: Routes = [
  { path: 'kpi-details', component: KpiDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 'useHash': false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
