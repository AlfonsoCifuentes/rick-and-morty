import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersContentComponent } from './components/characters-content/characters-content.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { CharacterCardComponent } from './components/characters-content/character-card/character-card.component';


@NgModule({
  declarations: [
    CharactersContentComponent,
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule
  ],
  providers: [HttpRequestService]
})
export class CharactersModule { }
