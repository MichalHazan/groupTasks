import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './comps/addcustomer/addcustomer.component';
import { FormComponent } from './comps/form/form.component';
import { ListComponent } from './comps/list/list.component';

const routes: Routes = [
  {path:"form",component:FormComponent},
  {path:"addcustomer",component:AddcustomerComponent},
  {path:"",component:ListComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
