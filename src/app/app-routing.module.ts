import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InviteHomeComponent } from './invite-home/invite-home.component';
import { InviteComponent } from './invite/invite.component';
import { NoPartyInviteHomeComponent } from './no-party-invite-home/no-party-invite-home.component';
import { NoPartyInviteComponent } from './no-party-invite/no-party-invite.component';

const routes: Routes = [

  {path:'', component: InviteHomeComponent},
  {path:'informacoes', component: InviteComponent},
  {path:'home', component: NoPartyInviteHomeComponent},
  {path:'infos', component: NoPartyInviteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
