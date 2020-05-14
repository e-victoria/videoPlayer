import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { HeaderService } from './header.service';

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

  constructor(private headerService: HeaderService) { }

  getInput(){
    const that = this;
    function getData(data) {
      that.valueList = data;
    }
    this.headerService.getMoviesListByTitle(this.value, getData);
    this.hideHomepage();
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
