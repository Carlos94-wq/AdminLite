import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PorfileComponent } from './porfile/porfile.component';
import { TableComponent } from './table/table.component';
import { BlankpageComponent } from './blankpage/blankpage.component';

const routes: Routes = [
    { path: 'dashboard', component: PagesComponent,
        children:[
            { path: '', component: DashboardComponent },
            { path: 'Porfile', component: PorfileComponent },
            { path: 'Table', component: TableComponent },
            { path: 'Blank', component: BlankpageComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
