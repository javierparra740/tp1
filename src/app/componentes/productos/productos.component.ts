import { Component, OnInit } from '@angular/core';
import { Producto } from './producto'
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  consolas = [{
    nombre: "Ps3",
    anio: 2009,
    url: "https://i.blogs.es/85043e/ps3-20slim-202/450_1000.jpg",
    disponibilidad: true
  },
  {
    nombre: "PS4",
    anio:2015,
    url: "https://cdn.pocket-lint.com/r/s/970x/assets/images/138763-games-review-sony-ps4-pro-review-image1-gcolf3ytme.jpg",
    disponibilidad: true
  },
  {
    nombre: "PS5",
    anio:2021,
    url:"https://elcomercio.pe/resizer/UxH8tIuIJU5kpEEDqOzyjPvS8Gc=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LXVIWBAR35DVVK4RP5TUZKEDHY.png",
    disponibilidad: true
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
