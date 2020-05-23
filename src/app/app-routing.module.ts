import { ListVendaComponent } from './components/vendas/list-venda/list-venda.component';
import { CreateVendaComponent } from './components/vendas/create-venda/create-venda.component';
import { CaixaVendaComponent } from './components/vendas/caixa-venda/caixa-venda.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vendas/caixa', component: CaixaVendaComponent },
  { path: 'vendas/create/:caixa/:lat/:long', component: CreateVendaComponent },
  { path: 'vendas/list', component: ListVendaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
