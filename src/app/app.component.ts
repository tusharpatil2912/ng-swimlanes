import { Component, OnInit } from '@angular/core';
import { SwimlaneItem, SwimlanesOptions } from '@tusharp/ng-swimlanes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  swimlanesOptions: SwimlanesOptions[] = [];
  data:SwimlaneItem[] = [];

  ngOnInit(): void {

    this.data = [
      {
        id: 1,
        name: 'test',
        description: 'test desc',
        date: '18-04-2023',
        user: 'Tushar',
        statusId:"2",
        tags: ['Trail','test','Trail','test']              
      },
      {
        id: 2,
        name: 'test 2',
        description: 'test desc 2',
        date: '19-04-2023',
        user: 'Patil',
        statusId:"2",
        tags: ['Trail 2']              
      },
      {
        id: 3,
        name: 'test3',
        description: 'test desc 3',
        date: '18-03-2023',
        user: 'Tush3ar',
        statusId:"4",
        tags: ['Tr3ail']              
      },
      {
        id: 4,
        name: 'test 4',
        description: 'test desc4',
        date: '14-04-2023',
        user: 'P4atil',
        statusId:"4",
        tags: ['T4rail 2']           
      }
    ];

    this.swimlanesOptions = [
        {
          id:"2",
          label:'Backlog',
          headerColor: 'Red',
          textColor:'white'
        },
        {
          id:"3",
          label:'To Do',
          headerColor: '#000000',
          textColor:'white'
        },
        {
          id: "4",
          label: 'In Progress',
          headerColor: 'rgb(0, 255, 166)',
          textColor:'white'
        },
        {
          id: "5",
          label: 'Completed',
          headerColor: 'darkgreen',
          textColor:'white'
        }
      ];
  }
  
  title = 'lib-ngx-swinlanes';

  onCardDrop(event:any){
    console.log(event);
    //alert('updated status = '+event.status);
  }

  onCardClick(event:any){
    console.log(event);
    alert('current status = '+event.status);
  }
}
