import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  getData(data) {
    console.log(data);
  }

  ngOnInit(): void {
    this.headerService.getMoviesListByTitle('Lorem', this.getData);
  }

}
