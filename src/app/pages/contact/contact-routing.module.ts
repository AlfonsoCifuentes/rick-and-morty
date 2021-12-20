import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactContentComponent } from './components/contact-content/contact-content.component';


const routes: Routes = [
  {path: "", component: ContactContentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }