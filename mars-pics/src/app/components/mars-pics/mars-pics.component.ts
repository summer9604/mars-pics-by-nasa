import { Component, OnInit } from '@angular/core';
import { MarsApiService } from 'src/app/services/mars-api.service';

@Component({
  selector: 'app-mars-pics',
  templateUrl: './mars-pics.component.html',
  styleUrls: ['./mars-pics.component.scss']
})
export class MarsPicsComponent implements OnInit {

  private picsCollection: any[] = [];
  private picsPerPage: number = 24;
  private firstPicPerPageIndex : number;
  private lastPicIPerPageIndex : number;
  private currentRover = "curiosity";
  currentPics: any[];
  selectedPage: HTMLElement;
  currentPage : number;
  numOfPages : number;

  constructor(private marsApiService: MarsApiService) { }

  ngOnInit(): void {
    this.getMarsPics(this.currentRover);
    this.selectedPage = document.getElementById("pageList");
  }

  getMarsPics(rover) {
    this.marsApiService.getMarsPics(rover)
      .subscribe(data => {
        this.resetPagination();
        this.resetPicCollection(data);
      });
  }

  private resetPagination() {

    this.currentPage = 1;
    
    this.firstPicPerPageIndex = 0
    
    this.lastPicIPerPageIndex = this.picsPerPage;
  }

  private resetPicCollection(data) {

    this.picsCollection = data["photos"];
        
    this.numOfPages = Math.ceil(this.picsCollection.length / this.picsPerPage);
        
    this.currentPics = this.picsCollection.slice(this.firstPicPerPageIndex, this.lastPicIPerPageIndex);
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

    this.lastPicIPerPageIndex = this.firstPicPerPageIndex + this.picsPerPage;

    this.currentPics = this.picsCollection.slice(this.firstPicPerPageIndex, this.lastPicIPerPageIndex);

    this.selectedPage["value"] = this.currentPage;
  }

  generatePageList() {

    var pageNums: number[] = [];

    for (var i = 0; i < this.numOfPages; i++) {
      pageNums.push(i + 1);
    }

    return pageNums;
  }

  changePageManually() {

    if (this.currentPage == this.selectedPage["value"]) return;

    this.currentPage = this.selectedPage["value"];

    this.changePage();
  }

  changeRover() {

    var selectedRover = document.getElementById("rover")["value"];

    if (selectedRover == this.currentRover) return;

    this.currentRover = selectedRover;

    this.getMarsPics(this.currentRover);
  }

}
