import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { CibilStatusComponent } from './cibil-status/cibil-status.component';
const OErouting: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    {path: 'cibil', component: CibilStatusComponent}
];

@NgModule({
    declarations: [DashboardComponent,  CibilStatusComponent],
    imports: [CommonModule, RouterModule.forChild(OErouting)],
})
export class OperationalExecativeModule {}
