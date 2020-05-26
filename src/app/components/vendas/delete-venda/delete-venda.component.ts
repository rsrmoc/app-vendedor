import { VendasService } from './../../vendas.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Venda } from './../vendas.module';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-venda',
  templateUrl: './delete-venda.component.html',
  styleUrls: ['./delete-venda.component.css']
})
export class DeleteVendaComponent implements OnInit {

  id: string;
  request: Venda;

  constructor( private vendasService: VendasService, 
    private router: Router, 
    private route: ActivatedRoute,
    private snack: MatSnackBar ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
 
    this.vendasService.getVenda(this.id).subscribe((request: Venda) => {

      this.request = request[0];
      console.log(this.request);

      });

  }

  delete(): void {
    this.vendasService.deleteVenda(this.id).subscribe(() => {
      //alert("Venda excluida com sucesso!");
      this.openSnack('Usuário Deletado com sucesso!!!', '');
      this.router.navigate(["/vendas/list"]);
    });
  }

  openSnack(message: string, action: string) {

    this.snack.open(message, action, {
      duration: 3000,
      verticalPosition: 'top'
    })
  }


}
