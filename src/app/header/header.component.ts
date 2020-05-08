import { Component } from '@angular/core';
import { HeaderService } from './header.service';
import IVideo from '../video/video';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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
}
