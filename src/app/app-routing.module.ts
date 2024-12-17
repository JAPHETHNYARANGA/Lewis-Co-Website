import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HompePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:'', component:HompePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
