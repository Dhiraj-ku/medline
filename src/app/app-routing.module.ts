import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponentComponent } from './form-component/form-component.component';
import { ReceiptComponent } from './receipt/receipt.component';

const routes: Routes = [
  {path: '' ,redirectTo:'form', pathMatch:'full'},
  {path:'form',  component:FormComponentComponent},
  {path: 'success', component:ReceiptComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
