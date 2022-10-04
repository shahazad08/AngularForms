import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from './shared/password.validator';
import { forbiddenNameValidator } from './shared/user-name.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get userName() {
    return this.registrationForm.controls.userName
  }
  constructor(private fb:FormBuilder) {}

  registrationForm=this.fb.group({
    userName:['', [Validators.required,  Validators.minLength(4), forbiddenNameValidator(/password/)]],
    password:[''],
    confirmPassword:[''],
    address: this.fb.group({
      city:[''],
      state:[''], 
      zipcode: ['']
    }, {validator:PasswordValidator})
   
  })
  // registrationForm=new FormGroup({
  //   userName:new FormControl('Shahazad'),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zipcode: new FormControl('')
  //   })
  // })

  loadApiData() {
    console.log("Log called");
    this.registrationForm.patchValue({
      userName:"Shaikh",
      password:"test",
      confirmPassword:"test",
      // address:{
      //   city:"Nashik",
      //   state:"Maharashtra",
      //   zipcode:"422101"
      // }
    })
    
  }


  }
