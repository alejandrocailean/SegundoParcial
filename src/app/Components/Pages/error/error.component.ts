import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  imgsrc='https://pixelz.cc/wp-content/uploads/2018/07/404-not-found-graffiti-uhd-4k-wallpaper.jpg';
  
  constructor() { }

  ngOnInit(): void {
  }

}
