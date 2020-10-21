import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';

import { OperationalExecativeModule } from './operational-execative/operational-execative.module';
import { CreditManagerModule } from './credit-manager/credit-manager.module';
import { AccountHeadModule } from './account-head/account-head.module';
import { LoanDisbustmentModule } from './loan-disbustment/loan-disbustment.module';
import { BranchManagerModule } from './branch-manager/branch-manager.module';
import { RelationShipExecativeModule } from './relation-ship-execative/relation-ship-execative.module';
import { MasterModuleModule } from './master-module/master-module.module';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            // {    path: '',           redirectTo: 'dashboard'            },
            // {    path: 'dashboard',   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)            },
            // {    path: 'screen1', loadChildren: () => import('./screen1/screen1.module').then(m => m.Screen1Module) },
            { path: 're', loadChildren: () => RelationShipExecativeModule },
            { path: 'oe', loadChildren: () => OperationalExecativeModule },
            { path: 'cm', loadChildren: () => CreditManagerModule },
            { path: 'ah', loadChildren: () => AccountHeadModule },
            { path: 'ld', loadChildren: () => LoanDisbustmentModule },
            { path: 'bm', loadChildren: () => BranchManagerModule },
            { path: 'admin', loadChildren: () => MasterModuleModule },
            {
                path: 'screen2',
                component: Screen2Component,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
