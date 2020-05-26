import { Component, OnInit } from '@angular/core';
import { VendasService } from '../../vendas.service';
import { Venda } from './../vendas.module';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-update-venda',
  templateUrl: './update-venda.component.html',
  styleUrls: ['./update-venda.component.css']
})
export class UpdateVendaComponent implements OnInit {

  id: string;
  request: Venda;

  constructor(private vendasService: VendasService, 
    private router: Router, 
    private route: ActivatedRoute, 
    private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.vendasService.getVenda(this.id).subscribe((request: Venda) => {

      this.request = request[0];
      console.log(this.request);

      });
  }

  update(){
    this.vendasService.updateVenda(this.id, this.request).subscribe(res => {
      console.log(res);
      //this.vendasService.showMessage('Atualizado Codigo ('+this.id+')');
     // this.vendasService.showMessage("Produto excluido com sucesso!");
      //alert('Atualizado Codigo ('+this.id+')');
      this.openSnack('Usuário Atualizado com sucesso!!!', '');
      this.router.navigate(["/vendas/list"]);
     
    }, error => console.log(error)
    );
  }

  openSnack(message: string, action: string) {

    this.snack.open(message, action, {
      duration: 3000,
      verticalPosition: 'top'
    })
  }

}
