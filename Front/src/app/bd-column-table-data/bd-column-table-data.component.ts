import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface bdColumnData {
  nombre: string;
  type: string;
  allowsNull: string;
}

const COLUMN_DATA: bdColumnData[] = [
  {  nombre: "id", type: "INT(11)", allowsNull: "false"},
  {  nombre: "imgUrl", type: "varchar(200)", allowsNull: "true"},
  {  nombre: "projectName", type: "VARCHAR(45)", allowsNull: "true"},
  {  nombre: "lastModification", type: "varchar(45)", allowsNull: "true"},
  {  nombre: "state", type: "varchar(45)", allowsNull: "true"},
];


@Component({
  selector: 'app-bd-column-table-data',
  templateUrl: './bd-column-table-data.component.html',
  styleUrls: ['./bd-column-table-data.component.css']
})
export class BdColumnTableDataComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'type', 'allowsNull'];
  dataSource = COLUMN_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
