import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarsApiService {

  constructor(private http : HttpClient) { }

    getMarsPics(rover) {

      switch(rover) {

        case "spirit":

          return this.http.get<any>(environment.spiritUrl);

        case "opportunity":

          return this.http.get<any>(environment.opportunityUrl);

        default:

          return this.http.get<any>(environment.curiosityUrl);
      }
    }

}
