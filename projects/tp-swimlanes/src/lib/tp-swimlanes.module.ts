import { NgModule } from '@angular/core';
import { SwimlaneCardComponent } from './swimlane-card/swimlane-card.component';
import { SwimlanesComponent } from './swimlanes/swimlanes.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SwimlaneCardComponent,
    SwimlanesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule
  ],
  exports: [
    SwimlanesComponent
  ]
})
export class TpSwimlanesModule { }
