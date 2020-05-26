import { VendasService } from './../../vendas.service';
import { Venda } from './../vendas.module';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-venda',
  templateUrl: './create-venda.component.html',
  styleUrls: ['./create-venda.component.css']
})
export class CreateVendaComponent implements OnInit {

  request: Venda = { 
    nm_cliente: '',
    rg: '',
    latitude: '',
    longitude: '',
    cd_caixa: '',
    valor: '',
  }

  response: Venda;

  constructor(private vendaService: VendasService, 
    private router: Router, 
    private route: ActivatedRoute, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.request.latitude = this.route.snapshot.paramMap.get('lat');
    this.request.longitude = this.route.snapshot.paramMap.get('long');
    this.request.cd_caixa = this.route.snapshot.paramMap.get('caixa'); 
  }

  save(){
    console.log(this.request);
    this.vendaService.createVenda(this.request).subscribe(res => {
      //this.response =res;
      //this.response = res[0];
      console.log();
      if(res[0]=true){
        this.openSnack('Usuário criado com sucesso!!!', '');
        this.router.navigate(["/vendas/list"]);
      }
      // alert('Usuario criado com sucesso!!!');

    })
  } 

  openSnack(message: string, action: string) {

    this.snack.open(message, action, {
      duration: 3000,
      verticalPosition: 'top'
    })
  }

}
