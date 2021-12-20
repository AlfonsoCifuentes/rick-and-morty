import { IUserRegister } from './../../models/form.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { comparePassword } from '../../validators/matchValidator';
import { ContactModule } from '../../contact.module';

@Component({
  selector: 'app-contact-content',
  templateUrl: './contact-content.component.html',
  styleUrls: ['./contact-content.component.scss']
})
export class ContactContentComponent implements OnInit {
  public registerForm: FormGroup;

  public submitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder) { 
    this.registerForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(30), Validators.minLength(2), Validators.pattern('[a-zA-Z]*')]],
      email: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,63}$")]],
      password: ["", [Validators.required, Validators.pattern('^[a-zA-Z]{3,14}$')]],
      repassword: [""]
    },{
      validator: comparePassword("password", "repassword")
    })
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    const user: IUserRegister = {
      name: this.registerForm.get("name")?.value,
      email: this.registerForm.get("email")?.value,
      password: this.registerForm.get("password")?.value,
      repassword: this.registerForm.get("repassword")?.value
    };
    alert ("USUARIO:" + user)
    this.registerForm.reset();
    this.submitted = false;
  }

}
