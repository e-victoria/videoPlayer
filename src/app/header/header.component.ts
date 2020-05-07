import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public value;
  public valueList;
  constructor(private headerService: HeaderService) { }

  getInput(){
    const that = this;
    function getData(data) {
      that.valueList = data;
    }
    this.headerService.getMoviesListByTitle(this.value, getData);
  }


}
