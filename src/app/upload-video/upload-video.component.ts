import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import IVideo from "../video/video";
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from "rxjs";
import {finalize} from "rxjs/operators";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.scss']
})
export class UploadVideoComponent {

  @ViewChild('uploadForm')
  form: FormGroup;
  imagePreview: string;

  newVideoForm = new FormGroup({
    'video_title': new FormControl('', [
      Validators.required
    ]),
    'video_description': new FormControl('',[
      Validators.required
    ]),
    'url': new FormControl(''),
    'video_thumbnail': new FormControl('')
  });

  constructor() { }

  uploadVideo(){}

  onImagePicked(event: Event){
    console.log('test1');
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

}
