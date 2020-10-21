import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoandisbustmentstatusComponent } from './loandisbustmentstatus/loandisbustmentstatus.component';
const ACrouting: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'loandisbustment', component: LoandisbustmentstatusComponent}
];


@NgModule({
  declarations: [DashboardComponent, LoandisbustmentstatusComponent],
  imports: [
    CommonModule, RouterModule.forChild(ACrouting)
  ]
})
export class AccountHeadModule { }
