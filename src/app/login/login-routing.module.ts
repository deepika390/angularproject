import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { RelationShipExecativeModule } from '../layout/relation-ship-execative/relation-ship-execative.module';
import { OperationalExecativeModule } from '../layout/operational-execative/operational-execative.module';
import { CreditManagerModule } from '../layout/credit-manager/credit-manager.module';
import { AccountHeadModule } from '../layout/account-head/account-head.module';
import { LoanDisbustmentModule } from '../layout/loan-disbustment/loan-disbustment.module';
import { BranchManagerModule } from '../layout/branch-manager/branch-manager.module';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {}
