import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { INumberOfCharacters } from '../../models/icharacterDetail';
import { ICharacterList } from '../../models/icharacterList';

@Component({
  selector: 'app-characters-content',
  templateUrl: './characters-content.component.html',
  styleUrls: ['./characters-content.component.scss']
})
export class CharactersContentComponent implements OnInit {

  private URL: string="https://rickandmortyapi.com/api/character/?page=1";
  public characterList: ICharacterList[] = [];
  public numberofCharacters!: INumberOfCharacters;

  public nextURL: string="";
  public prevURL: string="";

  

  constructor(private HttpRequestService: HttpRequestService) { }

  ngOnInit(): void {
    this.recoverCharacters();
  }

  nextUrlClick(): void {
    this.URL = this.nextURL
    this.recoverCharacters(); 
  }

  prevUrlClick(): void {
    this.URL = this.prevURL
    this.recoverCharacters();
  }


  public recoverCharacters() {
    this.HttpRequestService.getData(this.URL).subscribe((data: any)=> {
      const results: ICharacterList[] = data.results;
      this.numberofCharacters = data.info.count
      const formattedResults = results.map (({name, image, url, id}) => ({
        name,
        image,
        url,
        id
      }));
      this.characterList = formattedResults;

      this.nextURL = data.info.next;
      this.prevURL = data.info.prev;

    })
  }


}
