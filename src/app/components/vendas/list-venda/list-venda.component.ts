import { Component, OnInit } from '@angular/core';
import { VendasService } from '../../vendas.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-venda',
  templateUrl: './list-venda.component.html',
  styleUrls: ['./list-venda.component.css']
})
export class ListVendaComponent implements OnInit {

  venda: Array<any>;

  displayedColumns: string[] = ['Codigo', 'Cliente', 'RG', 'Latitude', 'Longitude','Caixa','Valor','Ação'];

  dataSource = new MatTableDataSource([]);

  constructor(private vendasService: VendasService) { }

  ngOnInit(): void {
    this.vendasService.getVendas().subscribe(res => {
      this.venda = res; 
      this.dataSource.data= res
    }) 
  }

}
