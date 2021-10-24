import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicketsComponent } from './tickets/tickets.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: TicketsComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/* export const routedComponents: any[] = [
  TicketComponent,
]; */
