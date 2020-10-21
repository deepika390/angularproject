import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
const CRrouting: Routes = [
    { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
    declarations: [DashboardComponent],
    imports: [CommonModule, RouterModule.forChild(CRrouting)],
})
export class CreditManagerModule {}
