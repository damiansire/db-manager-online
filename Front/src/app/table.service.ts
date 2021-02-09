import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  getAllTable() {
    return this.http.get("http://127.0.0.1:5555/api/v1/AllTables").pipe(map(x => x[0]))
  }

}
