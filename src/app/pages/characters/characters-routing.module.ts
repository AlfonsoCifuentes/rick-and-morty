import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './components/characters-content/character-detail/character-detail.component';
import { CharactersContentComponent } from './components/characters-content/characters-content.component';

const routes: Routes = [
  {path: "", component: CharactersContentComponent},
  {path: "detail/:idCharacter", component: CharacterDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
