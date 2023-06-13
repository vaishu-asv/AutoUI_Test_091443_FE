import { DropdownComponent } from './dropdown/dropdown.component';
import { CreatescheduleComponent } from './createschedule/createschedule.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'createschedule', component: CreatescheduleComponent },

  { path: 'dropdown', component: DropdownComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
