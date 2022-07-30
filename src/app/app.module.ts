import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { DatabaseModule, getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InviteHomeComponent } from './invite-home/invite-home.component';
import { InviteComponent } from './invite/invite.component';
import { NoPartyInviteComponent } from './no-party-invite/no-party-invite.component';
import { NoPartyInviteHomeComponent } from './no-party-invite-home/no-party-invite-home.component';

@NgModule({
  declarations: [
    AppComponent,
    InviteHomeComponent,
    InviteComponent,
    NoPartyInviteComponent,
    NoPartyInviteHomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    DatabaseModule,
    provideFirestore(() => getFirestore()),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
