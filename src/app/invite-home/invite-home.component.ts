import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite-home',
  templateUrl: './invite-home.component.html',
  styleUrls: ['./invite-home.component.scss']
})

export class InviteHomeComponent implements OnInit {

  currentDate:any;
  targetDate:any;
  cDateMillisecs:any;
  tDateMillisecs:any;
  difference:any;
  seconds:any;
  minutes:any;
  hours:any;
  days:any;
  year: number = 2022;
  month: number = 10;
  day:number = 8;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
  ) { }

  ngOnInit(): void {
  }

  callAnimation(){
    const object =  document.querySelector('#lock');
    (object as HTMLDivElement).style.transform = "translateY(-20px)"

    setTimeout(function() {
      window.location.href = "/informacoes";
    }, 1000);
  }

  ngAfterViewInit(){
    this.timer();
  }

  timer(){
    this.currentDate = new Date();
    this.targetDate = new Date(2022,9, 8, 17, 0, 0)
    this.cDateMillisecs = this.currentDate.getTime();
    this.tDateMillisecs = this.targetDate.getTime();
    this.difference = this.tDateMillisecs - this.cDateMillisecs;
    this.seconds = Math.floor(this.difference / 1000);
    this.minutes = Math.floor(this.seconds / 60);
    this.hours = Math.floor(this.minutes / 60);
    this.days = Math.floor(this.hours / 24);

    this.hours %= 24;
    this.minutes %= 60;
    this.seconds %= 60;
    this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
    this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;

    const days = document.querySelector('.days');
    (days as HTMLDivElement).innerHTML = (this.days + 'd');
    const hours = document.querySelector('.hours');
    (hours as HTMLDivElement).innerHTML = (this.hours + 'h');
    const mins = document.querySelector('.mins');
    (mins as HTMLDivElement).innerHTML = this.minutes;
    const seconds = document.querySelector('.seconds');
    (seconds as HTMLDivElement).innerHTML = this.seconds;

    setInterval(this.timer, 1000);
  }
}
