import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: ``, loadChildren: ()=> import ("./pages/home/home.module").then(m=>m.HomeModule)},
  {path: `about`, loadChildren: ()=> import ("./pages/about/about.module").then(m=>m.AboutModule)},
  {path: `characters`, loadChildren: ()=> import ("./pages/characters/characters.module").then(m=>m.CharactersModule)},
  {path:`locations`, loadChildren: ()=> import ("./pages/locations/locations.module").then(m=>m.LocationsModule)},
  {path: `contact`, loadChildren: ()=> import ("./pages/contact/contact.module").then(m=>m.ContactModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
