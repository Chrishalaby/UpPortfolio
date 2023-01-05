import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) { }
  download() {
    const a = document.createElement('a');
    a.href = 'assets/CV__Christian_ElHalabi.pdf';
    a.download = 'CV_Christian_ElHalabi.pdf';
    a.click();
  }
  ngOnInit(){
    this.primengConfig.ripple = true;
  }
  // @ViewChild('googly') anchor: ElementRef | undefined;

  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(e: any) {

  //   const mouseX = e.clientX;
  //   const mouseY = e.clientY;
  //   const anchor = document.getElementById('googly')
  //   const rekt = anchor?.getBoundingClientRect();
  //   if(rekt?.left && rekt.width && rekt?.top && rekt.height){
  //     const anchorX = rekt.left + rekt.width / 2;
  //     const anchorY = rekt.top + rekt.height / 2;

  //     const angleDeg = this.angle(mouseX, mouseY, anchorX, anchorY);

  //     const eyes = document.querySelectorAll<HTMLElement>('.eye')
  //     eyes.forEach(eye => {
  //       // eye.style.transform = `rotate(${90 + angleDeg}deg)`;
  //       // if(anchor){
  //       //   anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
  //       // }
  //       eye.style.transform = `rotate(${90 + angleDeg}deg)`;
  //     })
  //   }
  // }

  // angle(cx: number, cy: number, ex: number, ey: number){
  //   const dy = ey- cy;
  //   const dx = ex - cx;
  //   const rad = Math.atan2(dy, dx);
  //   const deg = rad * 180 / Math.PI;
  //   return deg;
  // }

}
