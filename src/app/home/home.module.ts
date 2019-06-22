import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentComponent} from '../home/content/content.component';
import {VideoComponent} from '../home/video/video.component';
import { HomeRoutingModule } from './home-routing.module';
import { from } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ContentComponent, VideoComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    HomeRoutingModule,
    MatButtonModule
  ]
})
export class HomeModule { }
