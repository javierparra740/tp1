import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* importacion del modulo forms */
import { FormsModule } from '@angular/forms';

/* importacion de modulo para el enrutamiento */
import { AppRoutingModule } from './app-routing.module';

/* importacion de los componentes */
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProductosComponent } from './componentes/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
