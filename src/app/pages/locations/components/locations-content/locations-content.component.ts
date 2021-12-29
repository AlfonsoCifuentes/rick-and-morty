import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { ILocation } from '../../models/ilocation';

@Component({
  selector: 'app-locations-content',
  templateUrl: './locations-content.component.html',
  styleUrls: ['./locations-content.component.scss']
})
export class LocationsContentComponent implements OnInit {

  private URL: string="https://rickandmortyapi.com/api/location?page=1";
  public locations: ILocation[] = [];

  public nextURL: string="";
  public prevURL: string="";

  constructor(private HttpRequestService: HttpRequestService) { }

  ngOnInit(): void {
    this.recoverLocations();
  }

  nextUrlClick(): void {
    this.URL = this.nextURL
    this.recoverLocations(); 
  }

  prevUrlClick(): void {
    this.URL = this.prevURL
    this.recoverLocations();
  }


  public recoverLocations() {
    this.HttpRequestService.getData(this.URL).subscribe((data: any)=> {
      const results: ILocation[] =  data.results;
      const formattedResults = results.map (({ name, type, dimension }) => ({
        name,
        type,
        dimension

      }))
      this.locations = formattedResults;
      
      this.nextURL = data.info.next;
      this.prevURL = data.info.prev;
    })
  }
}
