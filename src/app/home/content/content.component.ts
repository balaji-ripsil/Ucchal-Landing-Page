import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  content = [
    {text:
 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet dolore magna aliquam erat volutpat.'
}
];
icons = [
{social: '../../../assets/Icons/facebook.png'},
{social: '../../../assets/Icons/google-plus.png'},
{social: '../../../assets/Icons/instagram.png'},
{social: '../../../assets/Icons/twitter.png'}
];
  constructor() { }

  ngOnInit() {
  }

}
