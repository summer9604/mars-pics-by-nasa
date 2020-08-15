import { Component, OnInit } from '@angular/core';
import { MarsApiService } from 'src/app/services/mars-api.service';

@Component({
  selector: 'app-mars-pics',
  templateUrl: './mars-pics.component.html',
  styleUrls: ['./mars-pics.component.scss']
})
export class MarsPicsComponent implements OnInit {

  pics : any[] = [];

  constructor(private marsApiService : MarsApiService) { }

  ngOnInit(): void {
    this.getMarsPics();
  }

  getMarsPics() {
    this.marsApiService.getMarsPics()
        .subscribe(data => this.pics = data.photos);
  }

  cenas(pic : Object) {
    console.log(pic["id"]);
  }

}
