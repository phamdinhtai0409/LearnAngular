import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportTemplateListComponent } from './components/report-template-list/report-template-list.component';
import { ReportTemplateCreateComponent } from './components/report-template-create/report-template-create.component';
import { ReportTemplateEditComponent } from './components/report-template-edit/report-template-edit.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportTemplateListComponent,
    ReportTemplateCreateComponent,
    ReportTemplateEditComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectCreateComponent,
    ProjectEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
