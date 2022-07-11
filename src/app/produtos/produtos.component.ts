import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto} from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined; //add a propriedade de produtos

  constructor(
    private productosService: ProdutosService, //importando lista de produtos
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const produtos = this.productosService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();
  
      if (descricao) {
        this.produtos = produtos.filter(produto => produto.descricao.toLocaleLowerCase().includes(descricao));
        return;
      }

      this.produtos = produtos;
    })
  }

}
