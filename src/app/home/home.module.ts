import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentComponent} from '../home/content/content.component';
import {VideoComponent} from '../home/video/video.component';
import { HomeRoutingModule } from './home-routing.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [ContentComponent, VideoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
