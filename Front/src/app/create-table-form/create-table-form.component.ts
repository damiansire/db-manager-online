import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-table-form',
  templateUrl: './create-table-form.component.html',
  styleUrls: ['./create-table-form.component.css']
})
export class CreateTableFormComponent implements OnInit {

  signupForm : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'columnName': new FormControl(null),
      'type': new FormControl(null),
      'isNull': new FormControl('true')
  });
  }

  onSubmit(){
    console.log(this.signupForm)
  }

}
