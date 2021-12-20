import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { ILocation } from '../../models/ilocation';

@Component({
  selector: 'app-locations-content',
  templateUrl: './locations-content.component.html',
  styleUrls: ['./locations-content.component.scss']
})
export class LocationsContentComponent implements OnInit {

  private URL: string="https://rickandmortyapi.com/api/location";
  public locations: ILocation[] = [];

  constructor(private HttpRequestService: HttpRequestService) { }

  ngOnInit(): void {
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
    })
  }
}
