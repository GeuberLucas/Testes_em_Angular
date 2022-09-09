import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  video:any;
  canvas:any;
  context:any;
  base64:any;
  model:any;
  constructor() { }

  ngOnInit(): void {
    this.video=document.getElementById('video');
    this.canvas=document.querySelector('canvas');
    this.context= this.canvas.getContext('2d');
    this.model= document.querySelector('.overlay')
  }

  setupCamera(){
    navigator.mediaDevices.getUserMedia({
      video:{width:1280,height:720},
      audio:false
    }).then(stream =>{
      this.video.srcObject= stream;
      this.video.play();

      this.model.height=720;
      this.model.width=1280;
    }).catch(error=>{
      console.error(error);

    })
  }

  takepicture(){
    this.canvas.height=720;
    this.canvas.width=1280;
    this.context.drawImage(this.video,0,0);
    this.base64=this.canvas.toDataURL();
    console.log(this.base64);
  }
}
