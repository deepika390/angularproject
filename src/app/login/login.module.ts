import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { RoleComponent } from './role/role.component';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule, FormsModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [LoginComponent, RoleComponent]
})
export class LoginModule {}
