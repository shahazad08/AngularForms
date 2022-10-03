import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb:FormBuilder) {}

  registrationForm=this.fb.group({
    userName:['Shaikh'],
    password:[''],
    confirmPassword:[''],
    address: this.fb.group({
      city:[''],
      state:[''], 
      zipcode: ['']
    })
   
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
