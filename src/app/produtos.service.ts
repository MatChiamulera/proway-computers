import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: IProduto[] = produtos; //acessa os produtos

  constructor() { }

  getAll(){ //retorna a lista de produtos
    return this.produtos;
  }

  getOne(produtoId: number){ //retorna so o que tem aquele id
    return this.produtos.find(produto => produto.id = produtoId);
  }
}
