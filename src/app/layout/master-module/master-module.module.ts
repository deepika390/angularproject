import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcityComponent } from './addcity/addcity.component';
import { Routes, RouterModule } from '@angular/router';
import { BankdetailsComponent } from './bankdetails/bankdetails.component';
import { BankserviceService } from 'src/app/shared/services/bankservice.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { DetaillistComponent } from './detaillist/detaillist.component';


const MasterRouting: Routes = [
  {path: 'add', component: AddcityComponent},
  {path: 'bank', component: BankdetailsComponent},
  {path: 'detail', component: DetaillistComponent}
];


@NgModule({
  declarations: [AddcityComponent, BankdetailsComponent, DetaillistComponent],
  imports: [
    CommonModule, RouterModule.forChild(MasterRouting), HttpClientModule,
     ReactiveFormsModule, MatSelectModule
  ],
  providers: [BankserviceService],

})
export class MasterModuleModule { }
