import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.scss']
})
export class ImageBoxComponent {
  @Output()
  public clicked: EventEmitter<string> = new EventEmitter();

  @Input()
  public item: any = null;
  
  onClick() {
    this.clicked.emit('hola k ace');
  }
}
