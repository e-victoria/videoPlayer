import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import IVideo from "../video/video";

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.scss']
})
export class UploadVideoComponent implements OnInit {

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

  ngOnInit(): void {
  }

  uploadVideo(event) {
    event.preventDefault();
    const newVideo: IVideo = this.newVideoForm.value;
    console.log(newVideo)
  }

}
