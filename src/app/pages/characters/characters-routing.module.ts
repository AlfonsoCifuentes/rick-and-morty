import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersContentComponent } from './components/characters-content/characters-content.component';

const routes: Routes = [
  {path: "", component: CharactersContentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
