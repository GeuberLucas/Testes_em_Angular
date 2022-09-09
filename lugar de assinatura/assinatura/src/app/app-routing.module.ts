import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignatureComponent } from './pages/assignature/assignature.component';

const routes: Routes = [
  {path:'',component:AssignatureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
