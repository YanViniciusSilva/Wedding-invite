import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InviteHomeComponent } from './invite-home/invite-home.component';
import { InviteComponent } from './invite/invite.component';

const routes: Routes = [

  {path:'', component: InviteHomeComponent},
  {path:'informacoes', component: InviteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
