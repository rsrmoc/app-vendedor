import { Component, OnInit } from '@angular/core';
import { VendasService } from '../../vendas.service';


@Component({
  selector: 'app-list-venda',
  templateUrl: './list-venda.component.html',
  styleUrls: ['./list-venda.component.css']
})
export class ListVendaComponent implements OnInit {

  venda: Array<any>;

  constructor(private vendasService: VendasService) { }

  ngOnInit(): void {
    this.vendasService.getVendas().subscribe(res => this.venda = res)
    
  }

}
