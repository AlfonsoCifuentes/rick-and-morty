import { Component, Input, OnInit } from '@angular/core';
import { IFooter } from 'src/app/shared/models/rick-model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
@Input() public footer!: IFooter
  constructor() {
    this.footer= {
      copyright: "Copyright 2021 Alfonso Cifuentes Alonso, página creada para practicar Angular"
    }
  }

  ngOnInit(): void {
  }

}
