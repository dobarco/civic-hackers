import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {
  dados_edital = [];
  setClickedRow : Function;
  selectedRow : Number;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.setClickedRow = function(index){
        this.selectedRow = index;
      }
     }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['selectedFile'] !== undefined) {
        this.dados_edital.push({
          'name' : 'Nome do arquivo',
          'value': params['selectedFile']});
      }
      if (params['nome_do_produto'] !== undefined) {
        this.dados_edital.push({
          'name' : 'Nome do produto',
          'value': params['nome_do_produto']});
      }
      if (params['preco_do_produto1'] !== undefined) {
        this.dados_edital.push({
          'name' : 'Preço do produto 1',
          'value': params['preco_do_produto1']});
      }
      if (params['preco_do_produto2'] !== undefined) {
        this.dados_edital.push({
          'name' : 'Preço do produto 2',
          'value': params['preco_do_produto1']});
      }
      if (params['preco_do_produto3'] !== undefined) {
        this.dados_edital.push({
          'name' : 'Preço do produto 3',
          'value': params['preco_do_produto3']});
      } 
    });
  }
  onCompareClick(){
      this.router.navigate(['/compare']);
  }
  onMarketClick(){
    this.router.navigate(['/market']);
  }
  
}

