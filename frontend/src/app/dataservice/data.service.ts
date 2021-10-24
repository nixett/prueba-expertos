import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LoginI } from '../modelos/login.interface'
import { ResponseI } from '../modelos/response.interface'
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class dataService {


    urlLogin: string = "http://localhost:8000/api/users/login/"

    constructor(private http: HttpClient) { }

    public get(url: string) {
        return this.http.get(url);
    }

    loginByUser(form: LoginI): Observable<ResponseI> {
        let direccion = this.urlLogin;
        return this.http.post<ResponseI>(direccion, form);
    }

    /* private headers = new Headers({ 'Content-Type': 'application/json' }); */

    /* getTicket(): Promise<Ticket[]> {
        return this.http.get('http://localhost:8000/?format=json', { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Ticket[])
    } */


}

