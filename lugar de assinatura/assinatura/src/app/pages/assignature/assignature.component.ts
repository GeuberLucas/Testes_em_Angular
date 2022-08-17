import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignature',
  templateUrl: './assignature.component.html',
  styleUrls: ['./assignature.component.scss']
})
export class AssignatureComponent implements OnInit {
  context


  constructor() {
    document.addEventListener('DOMContentLoaded',()=>{
      const tela=document.querySelector('canvas');
      this.context = tela.getContext("2d")
      tela.width = 700
      tela.height= 500;

      const pincel={
        ativo:false,
        movendo:false,
        pos:{x:0,y:0},
        posAnterior:null
      }

      const draw =(linha) =>{
          this.context.beginPath();
        this.context.moveTo(linha.posAnterior.x,linha.posAnterior.y);
        this.context.lineTo(linha.pos.x,linha.pos.y);
        this.context.stroke()
      }

      tela.onmousedown = (evento) =>{
        pincel.ativo=true

      }

      tela.onmouseup = (evento) =>{
        pincel.ativo=false

      }

      tela.onmousemove = (evento) =>{
        pincel.pos.x= evento.clientX
        pincel.pos.y= evento.clientY
        pincel.movendo= true

      }
      const ciclo = ()=>{
        pincel.ativo && pincel.movendo && pincel.posAnterior ){
          draw({pos:pincel.pos,posAnterior:pincel.posAnterior})
          pincel.movendo =false
        }

        pincel.posAnterior= {x: pincel.pos.x,y:pincel.pos.y}
        setTimeout(ciclo, 10);
      }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
      ciclo()

    })
  }


  ngOnInit(): void {

  }








}


