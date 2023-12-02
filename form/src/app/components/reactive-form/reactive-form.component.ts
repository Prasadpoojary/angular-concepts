import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  constructor(private formBuilder:FormBuilder){}

  reactiveForm:FormGroup=this.formBuilder.group({
    name : [null],
    address : [null],
    city:[null],
    mobile:[null],
    email:[null],
    password:[null],
    confirmpassword:[null],
  });

}
