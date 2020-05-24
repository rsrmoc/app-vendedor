import { Venda } from './vendas/vendas.module';

import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  private url = 'http://rpsys.com.br/Rotinas/ApiVenda';
  snackBar: any;

  constructor( private http: HttpClient) { }

  getCaixaVendas(lat : string,long : string){
    const _url = `${this.url}/CaixaVenda/${lat}/${long}`;
    return this.http.get<any[]>(_url);
  }

  getVendas(){
    const _url = `${this.url}/GetVenda`;
    return this.http.get<any[]>(_url);
  }

  getVenda(id : string): Observable<Venda> {
    const _url = `${this.url}/GetVenda/${id}`;
    return this.http.get<Venda>(_url);
  }

  createVenda(request: Venda): Observable<Venda> {
    const _url_up = `${this.url}/CriarVenda`;
    return this.http.post<Venda>(_url_up,request);
  }

  updateVenda(id: string, request: any){
    const _url_up = `${this.url}/CriarVenda/${id}`;
    return this.http.put<Venda>(_url_up, JSON.stringify(request));
  }

  deleteVenda(id: string): Observable<Venda> {
    const url = `${this.url}/DelVenda/${id}`;
    return this.http.delete<Venda>(url).pipe(
     
    );
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

}
