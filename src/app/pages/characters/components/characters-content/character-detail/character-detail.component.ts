import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { ICharacterDetail, ILocationDetail, INumberOfCharacters, IOriginDetail } from '../../../models/icharacterDetail';
 

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

private URL: string = "https://rickandmortyapi.com/api/character/";
public originDetail: IOriginDetail = {
  name: ''
}
public locationDetail: ILocationDetail = {
  name: ''
}
public dataCharacter: ICharacterDetail = {
  name:"",
  image:"",
  species: "",
  gender: "",
  status: "",
}




public characterId?: any;

constructor(private httpRequestService: HttpRequestService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.characterId = params.idCharacter
    })
    this.RecoverCharacterDetail(this.characterId)

  }

  nextUrlClick(): void {
    this.RecoverCharacterDetail(this.characterId ++)
  }

  prevUrlClick(): void {
    if (this.characterId > 0) {
      this.RecoverCharacterDetail(this.characterId --)
    }

  }


  public RecoverCharacterDetail(idCharacter: any){
    this.httpRequestService.getData(this.URL + idCharacter).subscribe((data: any) => {
      this.dataCharacter = data;
      this.originDetail.name = data.origin.name;
      this.locationDetail.name = data.location.name;
    })
  }
}
