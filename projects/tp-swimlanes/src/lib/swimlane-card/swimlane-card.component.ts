import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'tp-swimlane-card',
  templateUrl: './swimlane-card.component.html',
  styleUrls: ['./swimlane-card.component.css']
})
export class SwimlaneCardComponent implements OnInit {

  @Input() ItemDetails:any;
  @Output() onCardClick:EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.onCardClick.emit(this.ItemDetails);
  }

}
