import { Component, Input, OnInit } from '@angular/core';
import { INav } from 'src/app/shared/models/rick-model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
@Input() public nav!: INav

  constructor() { 
    this.nav = {
      logo: {
        src: "../../../../assets/images/RickMortyLogo.png",
        alt: "Logo de Rick and Morty"
      }
    }
  }

  ngOnInit(): void {
  }

}
