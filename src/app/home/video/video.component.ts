import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  video = [{
    ucchalV: '../../../assets/video/NewVideo.mp4'
  }];

  logo = [{
    ucchalL: '../../../assets/image/LogoUcchal.png'
  }];

  text = [{
    texts: 'From the sky-high you opportunity strikes now!',
    tXt: 'Subscribe and be the first one to get the product'
  }];

  constructor() { }

  ngOnInit() {
  }

}
