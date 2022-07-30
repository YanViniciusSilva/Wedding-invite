import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref } from 'firebase/database';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-no-party-invite',
  templateUrl: './no-party-invite.component.html',
  styleUrls: ['./no-party-invite.component.scss']
})
export class NoPartyInviteComponent implements OnInit {
  dates = [
    {info:'Dia do Evento', hr:'08/10/2022'},
    {info:'Hora da Cerimônia', hr:'17:00h'},
  ]

  app = initializeApp(environment.firebase);

  database = getDatabase(this.app);

  name = new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]);
  successMessage:boolean = false;
  send:boolean = false;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
  ) { }

  ngOnInit(): void {
  }

  redirect(){
    window.location.href = 'http://finalfeliz.de/yves-rejanne'
  }

  writeInvitedName() {
    const confirmationDate = formatDate(new Date().toString(), 'dd/MM/yyyy hh:mm', this.locale);
    try{
      const db = this.database;
      set(ref(db, 'nome/' + this.name.value), {
        id: Math.floor(Math.random() * 256),
        nome: this.name.value,
        dateCreated: confirmationDate
      }).then(response => {
        this.successMessage = true;
      });
    }catch(erro){
      alert('Algo deu errado, verifique os dados ou tente novamente mais tarde :(')
    }
  }

}
