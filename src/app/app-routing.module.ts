import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnviComponent } from './envi/envi.component';
import { FlowComponent } from './flow/flow.component';
import { GasComponent } from './gas/gas.component';

const routes: Routes = [
  { path: 'environment', component: EnviComponent },
  { path: 'flow', component: FlowComponent },
  { path: 'gas', component: GasComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
