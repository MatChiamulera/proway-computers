import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

const routes: Routes = [ //criando rota
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) }, //rota produtos
  { path:  "", redirectTo: "produtos", pathMatch: "full"},
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) }, //redirecionando a pagina inicial para produtos
  { path: "**", component: NaoEncontradoComponent } //pg nao encontrada
]; 

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) //importando rotas
  ],
  exports: [
    RouterModule //exportando rotas
  ]
})
export class AppRoutingModule { }
