import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public titulo! : string;
  public texto!  : string;

  classTodiv ={
   
  };


  constructor() {
      this.classTodiv ={
        'text-sucess': true
      };
  
   }

  ngOnInit(): void {
    this.titulo! ='Loren é um texto';
    this.texto! = 'lorem é um texto simplesmente um texto'
  }

}
