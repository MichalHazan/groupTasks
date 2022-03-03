import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './comps/form/form.component';
import { ListComponent } from './comps/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ---Metrial
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
// --Header:-----
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
// ---Table
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { AddcustomerComponent } from './comps/addcustomer/addcustomer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    AddcustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    // --material:
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
