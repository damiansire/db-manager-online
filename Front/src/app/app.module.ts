import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BdTableListComponent } from './bd-table-list/bd-table-list.component';
import { BdTablePreviewComponent } from './bd-table-preview/bd-table-preview.component';
import { BdColumnTableDataComponent } from './bd-column-table-data/bd-column-table-data.component';
import { BdConnectionFormComponent } from './bd-connection-form/bd-connection-form.component';
import { BdTableCreatorComponent } from './bd-table-creator/bd-table-creator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from  '@angular/common/http';
import { OptionsComponent } from './options/options.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { PrincipalComponent } from './principal/principal.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TableOptionComponent } from './table-option/table-option.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateTableFormComponent } from './create-table-form/create-table-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BdTableListComponent,
    BdTablePreviewComponent,
    BdColumnTableDataComponent,
    BdConnectionFormComponent,
    BdTableCreatorComponent,
    OptionsComponent,
    PrincipalComponent,
    TableOptionComponent,
    CreateTableFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
