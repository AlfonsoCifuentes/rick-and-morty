import { Component, Input, OnInit } from '@angular/core';
import { ILocation } from '../../../models/ilocation';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent implements OnInit {
@Input() public location!: ILocation;
  constructor() { }

  ngOnInit(): void {
  }

}
