import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoComponent } from './video/video.component';
import {ContentComponent} from './content/content.component';
const routes: Routes = [
  {
    path: 'ucchal', component: VideoComponent ,
  },
  {
    path: 'content', component: ContentComponent ,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
