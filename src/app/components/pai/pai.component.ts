import { Component, OnInit, Output } from '@angular/core';
import { Teste } from 'src/app/Models/teste';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {
  obj:Teste[] = [{typeDocument:300,title:'foto do rosto',send:false,body:'<p>teste1</p>'},{typeDocument:302,title:'rg',send:false,body:'<p>teste2</p>'}]
  objsend:Teste;
  teste:boolean=true;
  index;
  constructor() {
    this.objsend=this.obj.find(x => this.testeObj(x))
    this.index=this.obj.indexOf(this.objsend);
   }

  ngOnInit(): void {
   
  }

  onEmiteTeste(evento){
    console.log(evento)
    this.obj[evento.indice].send=true
    this.teste=true;
    console.log(this.obj[evento.indice])
    
    this.objsend=this.obj.find(x => this.testeObj(x))
    this.index=this.obj.indexOf(this.objsend)
  }

  mostrar(){
    console.log(this.index)
    this.teste = false
    
  }

  testeObj(obj:Teste){
  
    return obj.send == false
  }
}
