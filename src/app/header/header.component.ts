import {AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { HeaderService } from './header.service';
import IVideo from '../video/video';
import {VideoData} from '../search-result/videoData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements AfterViewInit {

  @ViewChild('loginBtn')
  private loginBtn: ElementRef;

  @Output()
  videoSelected: EventEmitter<VideoData> = new EventEmitter<VideoData>();
  value: string;
  searchResults: IVideo[];

  constructor(private headerService: HeaderService) { }

  ngAfterViewInit(): void {
    if (localStorage.getItem('token')) {
      this.loginBtn.nativeElement.textContent = 'Log out';
    }
  }

  getInput() {
    console.log(this.loginBtn);
    const that = this;
    function getData(data) {
      that.searchResults = data;
    }
    this.headerService.getMoviesListByTitle(this.value, getData);
  }

  onClickHide(){
    const movieList = document.querySelector('.movies-wrapper');
    movieList.addEventListener('click', () =>{
      movieList.remove();
    })
  }
}
