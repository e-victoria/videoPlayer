
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { HeaderService } from './header.service';
import IVideo from '../video/video';
import {VideoData} from '../search-result/videoData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

  public value;
  public valueList;
  public videoList;

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
    this.hideHomepage();
  }


  onVideoSelect($event: VideoData) {
    this.videoSelected.emit($event);
  }

  ngOnInit(): void {
    const that = this;
    function getMovie(data) {
      that.videoList = data;
      console.log(data)
    }
    this.headerService.getAllMovies(getMovie);
  }

  hideHomepage(){
    const hide = this.showMovieList;
    hide.nativeElement.style.display = 'none';
  }
}
