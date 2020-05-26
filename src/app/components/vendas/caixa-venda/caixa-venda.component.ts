import { VendasService } from './../../vendas.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-caixa-venda',
  templateUrl: './caixa-venda.component.html',
  styleUrls: ['./caixa-venda.component.css']
})
export class CaixaVendaComponent implements OnInit {

  venda: Array<any>;
  lat: string;
  long: string;
  displayedColumns: string[] = ['Caixa', 'Descrição', 'Endereço da Caixa', 'Distancia', 'Ação'];

  dataSource = new MatTableDataSource([]);

  /**
   * 
   * <th>Caixa </th>
		<th>Descrição</th>
		<th>Endereço da Caixa</th>
		<th class="center">Distancia</th>
		<th>Ação</th>
   */
  
  constructor(private vendasService: VendasService) { }

  ngOnInit(): void {
    this.lat='-16.7568938';
    this.long='-43.8630467';
    this.vendasService.getCaixaVendas(this.lat,this.long).subscribe(res => {
      //this.venda = res
      this.dataSource.data = res;
    });
  }

  

}
