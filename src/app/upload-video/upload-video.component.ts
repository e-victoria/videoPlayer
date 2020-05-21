import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireStorage} from "@angular/fire/storage";
import {Observable} from "rxjs";
import {finalize} from "rxjs/operators";
import {UploadVideoService} from "./upload-video.service";

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.scss']
})
export class UploadVideoComponent {

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
  private thumbnail: Blob;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private storage: AngularFireStorage, private uploadVideoService: UploadVideoService) {}

  uploadImg(event) {
    this.thumbnail = new Blob([event.target.files[0]], { type: "image/jpeg" });
  }

  saveVideo(event) {
    event.preventDefault();

    if (this.thumbnail) {
      this.newVideoForm.value.video_thumbnail = this.newVideoForm.value.video_title;
      const storageUrl = '/';
      const storageRef = this.storage.ref(storageUrl + (this.newVideoForm.value.video_title + '.png'));
      const task = storageRef.put(this.thumbnail);
      // observe percentage changes
      this.uploadPercent = task.percentageChanges();
      // get notified when the download URL is available
      task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = storageRef.getDownloadURL())
      )
        .subscribe()
    }
    const getResponse = (response) => {
      console.log(response);
    }

    this.uploadVideoService.uploadVideo(this.newVideoForm.value, getResponse);
  }

}
