import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { CibilstatusComponent } from './cibilstatus/cibilstatus.component';
const RSrouting: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'cibil', component: CibilstatusComponent },
];

@NgModule({
    declarations: [DashboardComponent, CibilstatusComponent],
    imports: [CommonModule, RouterModule.forChild(RSrouting)],
})
export class RelationShipExecativeModule {}
