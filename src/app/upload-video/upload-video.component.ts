import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import IVideo from "../video/video";
import {AngularFireStorage} from "@angular/fire/storage";
import {Observable} from "rxjs";
import {finalize} from "rxjs/operators";

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
  private thumbnail: Blob;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private storage: AngularFireStorage) {}

  ngOnInit(): void {
  }

  uploadImg(event) {
    this.thumbnail = new Blob([event.target.files[0]], { type: "image/jpeg" });
  }

  saveVideo(event) {
    event.preventDefault();
    const storageUrl = '/';
    const storageRef = this.storage.ref(storageUrl + this.newVideoForm.value.video_title);
    const task = storageRef.put(this.thumbnail);
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = storageRef.getDownloadURL() )
    )
      .subscribe()
  }

}
