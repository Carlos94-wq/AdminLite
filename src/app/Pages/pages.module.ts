import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../Shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { PorfileComponent } from './porfile/porfile.component';
import { TableComponent } from './table/table.component';
import { IconsComponent } from './icons/icons.component';
import { BlankpageComponent } from './blankpage/blankpage.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    PorfileComponent,
    TableComponent,
    IconsComponent,
    BlankpageComponent
  ],
  exports:[
    DashboardComponent,
    PagesComponent,
    PorfileComponent,
    TableComponent,
    IconsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
