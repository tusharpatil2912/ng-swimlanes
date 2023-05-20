import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SwimlaneItem, SwimlanesOptions } from '../models/SwimlanesOptions.model';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'tp-swimlanes',
  templateUrl: './swimlanes.component.html',
  styleUrls: ['./swimlanes.component.css']
})
export class SwimlanesComponent implements OnInit {

  @Input()
  swimlanesOptions: SwimlanesOptions[]=[];

  @Input()
  data: SwimlaneItem[]=[];

  @Output() onCardClickEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCardDropEvent: EventEmitter<any> = new EventEmitter<any>();

  //data:SwimlaneItem[]=[];
  users:string[]=[];
  sortedData:any={};
  initialData:any={};
  userFilter:any;

  constructor() { }

  ngOnInit(): void {
    //console.log(this.data);
    this.data.forEach(task=>{
      this.users.push(task.user);
    });
    //console.log(this.users);
    
    this.swimlanesOptions.forEach(lane=>{
      let tData = this.data.filter(p=> p.statusId== lane.id);
      let key = lane.id;
      this.sortedData[key] = tData;
    });
    //console.log(this.sortedData);
    this.initialData = JSON.parse(JSON.stringify(this.sortedData));
  }

  drop(event: any, status:string) {    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }

    const data = {
      status: status,
      data: event
    }
    this.onCardDropEvent.emit(data);
  }

  onCardClick(event:any,status:any){
    const data = {
      status: status,
      data: event
    }
    this.onCardClickEvent.emit(data);
  }

  filerByUser(){
    //console.log(this.userFilter);
    if(this.userFilter==""){
      this.sortedData = JSON.parse(JSON.stringify(this.initialData));
    } else{
      this.swimlanesOptions.forEach(p=>{
        let temp = this.initialData[p.id].filter((u:any)=> u.user == this.userFilter);
        this.sortedData[p.id] = temp;
      });
      //console.log(this.sortedData);
    }    
  }

}
