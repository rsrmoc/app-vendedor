import { Component, OnInit } from '@angular/core';
import { VendasService } from '../../vendas.service';
import { Venda } from './../vendas.module';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-venda',
  templateUrl: './update-venda.component.html',
  styleUrls: ['./update-venda.component.css']
})
export class UpdateVendaComponent implements OnInit {

  id: string;
  request: Venda;

  constructor(private vendasService: VendasService, private router: Router, private route: ActivatedRoute) { }

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
      alert('Atualizado Codigo ('+this.id+')');
      this.router.navigate(["/vendas/list"]);
     
    }, error => console.log(error)
    );
  }

}
