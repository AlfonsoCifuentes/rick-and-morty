import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactContentComponent } from './components/contact-content/contact-content.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactContentComponent],
  imports: [CommonModule, ContactRoutingModule, ReactiveFormsModule],
})
export class ContactModule {}
