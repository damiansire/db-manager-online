import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from  '@angular/forms';

@Component({
  selector: 'app-bd-table-creator',
  templateUrl: './bd-table-creator.component.html',
  styleUrls: ['./bd-table-creator.component.css']
})
export class BdTableCreatorComponent implements OnInit {

  createTableForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  
  
  }

}
