import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  registrationForm: FormGroup;

  video = [{
    ucchalV: '../../assets/video/Video.mp4'
  }];

  logo = [{
    ucchalL: '../../assets/image/Logo Ucchal Fashion Png (1).png'
  }];

  text = [{
    texts: 'From the sky-high you opportunity strikes now!',
    tXt: 'Subscribe and be the first one to get the product'
  }];

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.registrationForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      phoneNumber: [''],
      emailId: [''],
    });
  }
  onSubmit() {
    console.log('test');
  }
}
