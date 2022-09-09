import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignature',
  templateUrl: './assignature.component.html',
  styleUrls: ['./assignature.component.scss']
})
export class AssignatureComponent implements OnInit {

  constructor() {
    document.addEventListener('DOMContentLoaded',()=>{
      const tela=document.querySelector('canvas');
      const context = tela.getContext("2d")


      const pincel={
        ativo:false,
        movendo:false,
        pos:{x:0,y:0},
        posAnterior:null
      }

      const draw =(linha) =>{
        context.beginPath();
        context.moveTo(linha.posAnterior.x,linha.posAnterior.y);
        context.lineTo(linha.pos.x,linha.pos.y);
        context.stroke()
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
        if(pincel.ativo && pincel.movendo && pincel.posAnterior ){
          draw({pos:pincel.pos,posAnterior:pincel.posAnterior})
          pincel.movendo =false
        }

        pincel.posAnterior= {x: pincel.pos.x,y:pincel.pos.y}
        setTimeout(ciclo, 10);
      }

      ciclo()

      document.getElementById('clear').addEventListener('click', function() {
        context.clearRect(0, 0, tela.width, tela.height);
      }, false);
    })
  }



  ngOnInit(): void {

  }








}


