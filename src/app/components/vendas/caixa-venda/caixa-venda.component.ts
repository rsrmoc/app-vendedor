import { VendasService } from './../../vendas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caixa-venda',
  templateUrl: './caixa-venda.component.html',
  styleUrls: ['./caixa-venda.component.css']
})
export class CaixaVendaComponent implements OnInit {

  venda: Array<any>;
  lat: string;
  long: string;
  
  constructor(private vendasService: VendasService) { }

  ngOnInit(): void {
    this.lat='-16.7568938';
    this.long='-43.8630467';
    this.vendasService.getCaixaVendas(this.lat,this.long).subscribe(res => this.venda = res)
  }

}
