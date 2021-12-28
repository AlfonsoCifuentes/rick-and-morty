import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ContactContentComponent } from './components/contact-content/contact-content.component';


const routes: Routes = [
  {path: "", component: ContactContentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
