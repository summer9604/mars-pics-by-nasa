import { Component, OnInit } from '@angular/core';
import { MarsApiService } from 'src/app/services/mars-api.service';

@Component({
  selector: 'app-mars-pics',
  templateUrl: './mars-pics.component.html',
  styleUrls: ['./mars-pics.component.scss']
})
export class MarsPicsComponent implements OnInit {

  private picsCollection: any[] = [];
  private picsPerPage: number = 25;
  private firstPicPerPageIndex : number;
  private lastPicImageIndex : number;
  currentPics : any[];
  selectedPage : HTMLElement;
  currentPage = 1;
  numOfPages: number;

  constructor(private marsApiService: MarsApiService) { }

  ngOnInit(): void { 
    this.getMarsPics();
  }

  getMarsPics() {
    this.marsApiService.getMarsPics().subscribe(data => {   
      this.picsCollection = data["photos"];
      this.numOfPages = Math.ceil(this.picsCollection.length / this.picsPerPage);
      this.firstPicPerPageIndex = 0;
      this.lastPicImageIndex = 24;
      this.currentPics = this.picsCollection.slice(this.firstPicPerPageIndex, this.lastPicImageIndex);
      this.selectedPage = document.getElementById("pageList");
    });
  }

  nextPage() {

    if (this.currentPage >= this.numOfPages) return;

    this.currentPage++;

    this.changePage();
  }

  previousPage() {

    if (this.currentPage <= 1) return;

    this.currentPage--;

    this.changePage();
  }

  changePage() {

    this.firstPicPerPageIndex = (this.currentPage - 1) * this.picsPerPage;

    this.lastPicImageIndex = this.firstPicPerPageIndex + (this.picsPerPage - 1);

    this.currentPics = this.picsCollection.slice(this.firstPicPerPageIndex, this.lastPicImageIndex);

    this.selectedPage["value"] = this.currentPage;
  }

  generatePageList() {

    var pageNums: number[] = [];
  
    for(var i = 0; i < this.numOfPages; i++) {
      pageNums.push(i + 1);
    }

    return pageNums;
  }

  changePageManually(){

    if (this.currentPage == this.selectedPage["value"]) return;

    this.currentPage = this.selectedPage["value"];

    this.changePage();
  }
}
