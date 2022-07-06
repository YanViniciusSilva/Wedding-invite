import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  photos = [
    {src:'../../assets/foto1.jpeg'},
    {src:'../../assets/foto2.jpeg'},
    {src:'../../assets/foto3.jpeg'},
    {src:'../../assets/foto4.jpeg'},
    {src:'../../assets/foto5.jpeg'},
    {src:'../../assets/foto6.jpeg'},
    {src:'../../assets/foto7.jpeg'},
    {src:'../../assets/foto8.jpeg'},
    {src:'../../assets/foto9.jpeg'},
    {src:'../../assets/foto10.jpeg'},
    {src:'../../assets/foto11.jpeg'},
    {src:'../../assets/foto12.jpeg'},
  ]

  title = 'wedding-invitation';

  ngAfterViewInit(){
    this.aplyEffects()
  }

  aplyEffects(){
    const obj = document.querySelector('.gallery-lightbox-container')
    const screenSize = window.screenTop;
    (obj as HTMLDivElement).style.height = screenSize +'px'
  }
}
