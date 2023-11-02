import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {AppRoutingModule} from "./app-routing.module";
import {LoginFormComponent} from './component/login-form/login-form.component';
import {RegisterFormComponent} from './component/register-form/register-form.component';
import {ScrapperListComponent} from './component/scrapper-list/scrapper-list.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ScrapperAddComponent} from './component/scrapper-add/scrapper-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ScrapperListComponent,
    ScrapperAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule,
    MatPaginatorModule, MatTableModule, MatPaginatorModule, MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
