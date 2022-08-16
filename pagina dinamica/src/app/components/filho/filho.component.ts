import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Teste } from 'src/app/Models/teste';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent implements OnInit {
  @Input() index :number;
  @Input() title:string | undefined;
  @Input()  body;
  @Output() eventoteste:EventEmitter<any> = new EventEmitter();
  

  constructor() {
    
   }

  ngOnInit(): void {
   
  }

  mudabody(){
    
  }

  testeevento(){
    this.eventoteste.emit({indice:this.index})
  }
}
