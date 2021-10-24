import { Component, OnInit } from '@angular/core';
import { dataService } from '../dataservice/data.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  public listaTickets: any = []

  constructor(private dataService: dataService) {

  }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData() {
    this.dataService.get('http://localhost:8000/api/ticket/?format=json')
      .subscribe(respuesta => {
        /* console.log(respuesta); */
        this.listaTickets = respuesta;
      })
  }

}
