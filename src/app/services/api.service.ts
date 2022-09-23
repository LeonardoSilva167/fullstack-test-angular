import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getDataHoraServidor(): Observable<any> {
    return this.http.get(environment.apiHost + '/info/dataHora');
  }

  public getMensagem(elementosForm: any): Observable<any> {
    return this.http.post(`${environment.apiHost}/info/mensagem`,elementosForm);
  }

}
