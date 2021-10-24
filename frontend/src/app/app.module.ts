import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';
import { TicketsComponent } from './tickets/tickets.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    NavbarComponent,
    TicketsComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
