
import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { HeaderService } from './header.service';
import IVideo from '../video/video';
import {VideoData} from '../search-result/videoData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  @ViewChild('showMovieList')
  private showMovieList: ElementRef;

  @Output()
  videoSelected: EventEmitter<VideoData> = new EventEmitter<VideoData>();
  value: string;
  searchResults: IVideo[];

  constructor(private headerService: HeaderService) { }

  getInput() {
    const that = this;
    function getData(data) {
      that.searchResults = data;
    }
    this.headerService.getMoviesListByTitle(this.value, getData);
  }


  onVideoSelect($event: VideoData) {
    this.videoSelected.emit($event);
  }
}
