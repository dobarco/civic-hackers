import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { InsightService } from '../../services/insight.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient,
    private router: Router,
    private insigths: InsightService) {

   }
  selectedFile = null;
  ngOnInit() {
  }

  onFileSelected(event){
    console.log(event);
    this.selectedFile = event.target.files[0];
  }

  onUpload(){
    this.insigths.doSendFile(this.selectedFile).subscribe(data=>{
      this.router.navigate(['/insights'],{
        queryParams:
        {
          selectedFile: this.selectedFile,
          nome_do_produto: data.nome_do_produto,
          preco_do_produto1: data.preco_do_produto1,
          preco_do_produto2: data.preco_do_produto2,
          preco_do_produto3: data.preco_do_produto3
        }
      });
    });
    
  }

}
