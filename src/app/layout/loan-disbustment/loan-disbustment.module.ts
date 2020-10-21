import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
const LDrouting: Routes = [
    { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
    declarations: [DashboardComponent],
    imports: [CommonModule, RouterModule.forChild(LDrouting)],
})
export class LoanDisbustmentModule {}
