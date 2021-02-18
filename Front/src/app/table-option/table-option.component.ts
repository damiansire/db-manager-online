import {MatDialog} from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { CreateTableFormComponent } from '../create-table-form/create-table-form.component';

@Component({
  selector: 'app-table-option',
  templateUrl: './table-option.component.html',
  styleUrls: ['./table-option.component.css']
})
export class TableOptionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  openDialog() {
    this.dialog.open(CreateTableFormComponent);
  }

  

}
