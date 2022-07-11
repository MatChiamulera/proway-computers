import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto: IProduto | undefined
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoServive: NotificacaoService,
    private carrinhoService: CarrinhoService

    ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap; //traz todos os parametros da rota
    const produtoId = Number(routeParams.get("id")); //pegando o parametro id
    this.produto = this.produtosService.getOne(produtoId); // amarando o produto ao nosso serviço declarado a cima
  }

  adicionarAoCarrinho(){
    this.notificacaoServive.notificar("O produto foi adicionado ao carrinho");
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    } 
    this.carrinhoService.adcionarAoCarrinho(produto);
  }

}
