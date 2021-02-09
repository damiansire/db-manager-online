import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { TableService } from '../table.service'
@Component({
  selector: 'app-bd-table-list',
  templateUrl: './bd-table-list.component.html',
  styleUrls: ['./bd-table-list.component.css']
})
export class BdTableListComponent implements OnInit {
  constructor(private tableService: TableService){}

  allTableName = ["transactions", "projects", "food", "tracker"]

  ngOnInit() {
    this.tableService.getAllTable().subscribe(
      arrayTableNames => 
      this.allTableName = arrayTableNames)
  }
  
}