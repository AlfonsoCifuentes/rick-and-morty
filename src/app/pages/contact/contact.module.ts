import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactContentComponent } from './components/contact-content/contact-content.component';

@NgModule({
  declarations: [ContactContentComponent],
  imports: [CommonModule, ContactRoutingModule],
})
export class ContactModule {}
