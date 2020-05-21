import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import IVideo from '../video/video';
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})

export class SearchResultComponent implements OnInit{

  @Input()
  iVideo: IVideo;
  @ViewChild('video')
  private videoElement: ElementRef;
  private profileUrl;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
    let ref;
    if (this.iVideo.video_thumbnail.split('.').length === 1  && this.iVideo.video_thumbnail) {
      ref = this.storage.ref(this.iVideo.video_thumbnail + '.png');
    } else if (!this.iVideo.video_thumbnail) {
      ref = this.storage.ref('unavailable.png');
    } else {
      ref = this.storage.ref(this.iVideo.video_thumbnail);
    }
    this.profileUrl = ref.getDownloadURL();
    this.profileUrl.subscribe(
      (res) => {
        this.iVideo.video_thumbnail = res;
      });
  }

  navigate() {
    window.location.href = 'video/' + this.iVideo.video_id;
  }

  play() {
    this.videoElement.nativeElement.play();
  }

  reset() {
    this.videoElement.nativeElement.pause();
    this.videoElement.nativeElement.currentTime = 0;
  }


}
