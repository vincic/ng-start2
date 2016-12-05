import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { MeetupCphComponent } from './meetup-cph/meetup-cph.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedComponent, MeetupCphComponent]
})
export class SharedModule { }
