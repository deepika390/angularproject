import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilestatusComponent } from './filestatus/filestatus.component';
const BMrouting: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'file', component: FilestatusComponent },
];

@NgModule({
    declarations: [DashboardComponent, FilestatusComponent],
    imports: [CommonModule, RouterModule.forChild(BMrouting)],
})
export class BranchManagerModule {}
