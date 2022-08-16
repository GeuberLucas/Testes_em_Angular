import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignature',
  templateUrl: './assignature.component.html',
  styleUrls: ['./assignature.component.scss']
})
export class AssignatureComponent implements OnInit {


  constructor() {
    document.addEventListener('DOMContentLoaded',()=>{
      const tela =document.querySelector('canvas');
      const context = tela.getContext("2d")
      tela.width = 700
      tela.height= 500;

      context.beginPath();
      const
      context.moveTo(10,10);
      context.lineTo(350,250);
      context.stroke()
    })
  }

  ngOnInit(): void {

  }








}


