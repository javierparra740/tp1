import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pelicula;
  constructor() {
    this.pelicula = { id: 1, nombre: "El secreto de sus ojos", anio: 2010 }
  }

  ngOnInit(): void {
  }

}
