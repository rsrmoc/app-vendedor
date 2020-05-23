import { Venda } from './vendas/vendas.module';

import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  private url = 'http://rpsys.com.br/Rotinas/ApiVenda';

  constructor( private http: HttpClient) { }

  getCaixaVendas(lat : string,long : string){
    const _url = `${this.url}/CaixaVenda/${lat}/${long}`;
    return this.http.get<any[]>(_url);
  }

  getVendas(){
    const _url = `${this.url}/GetVenda`;
    return this.http.get<any[]>(_url);
  }

  createUser(request: Venda): Observable<Venda> {
    const _url_up = `${this.url}/CriarVenda`;
    return this.http.post<Venda>(_url_up,request);
  }

}
