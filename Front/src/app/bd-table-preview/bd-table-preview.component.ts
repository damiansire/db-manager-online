import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bd-table-preview',
  templateUrl: './bd-table-preview.component.html',
  styleUrls: ['./bd-table-preview.component.css']
})
export class BdTablePreviewComponent implements OnInit {

  @Input() tableName: String;

  constructor() { }

  ngOnInit(): void {
  }

}
