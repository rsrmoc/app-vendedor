import { DeleteVendaComponent } from './components/vendas/delete-venda/delete-venda.component';
import { UpdateVendaComponent } from './components/vendas/update-venda/update-venda.component';


import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core'; 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CaixaVendaComponent } from './components/vendas/caixa-venda/caixa-venda.component';
import { CreateVendaComponent } from './components/vendas/create-venda/create-venda.component';
import { ListVendaComponent } from './components/vendas/list-venda/list-venda.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';  
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatCardModule } from  '@angular/material/card';
import { MatButtonModule } from  '@angular/material/button';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';  



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CaixaVendaComponent,  
    CreateVendaComponent,
    ListVendaComponent,
    UpdateVendaComponent,
    DeleteVendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatListModule,
    MatExpansionModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    BrowserAnimationsModule 
  
  ],
  providers: [{
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
