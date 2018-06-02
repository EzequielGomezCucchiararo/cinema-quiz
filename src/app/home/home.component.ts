import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public imageBoxes: any[] = [
    { imageUrl: 'https://cdn4.iconfinder.com/data/icons/carnival-vol-1/48/44-512.png', text: 'Play' },
    { imageUrl: 'http://icons.iconarchive.com/icons/icons-land/metro-raster-sport/256/Trophy-icon.png', text: 'Ranking' },
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
