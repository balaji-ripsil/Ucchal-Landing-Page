import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {Registration} from './registration.model';
import {HomeService} from '../home.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  hide = true;
  regModel: Registration;
  registrationForm: FormGroup;
  submitted = false;

  emailId = new FormControl('', [Validators.required, Validators.email]);

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

  constructor(private fb: FormBuilder, private homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.registrationForm = this.fb.group({
      emailId: ['', [Validators.email, Validators.required] ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName: ['']
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
  }
    console.log('test');
    this.regModel = new Registration();
    this.regModel.emailId = this.registrationForm.controls.emailId.value;
    this.regModel.firstName = this.registrationForm.controls.firstName.value;
    this.regModel.lastName = this.registrationForm.controls.lastName.value;
    this.regModel.password = this.registrationForm.controls.password.value;
    this.homeService.submit(this.regModel).subscribe(data => {
      this.regModel = data;
      console.log(data);
      this.registrationForm.reset();
     /*  this.router.navigate(['account/signin']); */
    }, error => {
      console.log(error);
    });
  }
}
