import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { BankDetails } from 'src/app/model/bankdetails.model';
import { Branch } from 'src/app/model/branch.model';
import { Role } from 'src/app/model/role.model';
import { BankserviceService } from 'src/app/shared/services/bankservice.service';


@Component({
  selector: 'app-bankdetails',
  templateUrl: './bankdetails.component.html',
  styleUrls: ['./bankdetails.component.scss']
})
export class BankdetailsComponent implements OnInit {

  createAccountForm: FormGroup;
  bankdetails: BankDetails[] = [];
  branch: Branch[] = [];
  role: Role[] = [];
  constructor(private bservice: BankserviceService) { }


  ngOnInit(): void {
    this.bservice.allBanks().subscribe(
      data => this.bankdetails = data
      );

      this.createAccountForm = new FormGroup({
        bank1: new FormControl(''),
        branch1: new FormControl(''),
        role1: new FormControl('')
      });
  }
   onChangeBank(bankId: number) {
     if (bankId) {
       this.bservice.allBranch().subscribe(
         data => {
           this.branch = data;
           this.role = null;
           return this.bankdetails;
         }
       );
     } else {
       this.branch = null;
       this.role = null;
     }

   }

   onChangeBranch(branchId: number) {
     if (branchId) {
       this.bservice.allRole().subscribe(
         data => this.role = data
       );
     } else {
       this.role = null;
     }

   }
   deleteData(bank: BankDetails) {
   this.bservice.deleteData(bank).subscribe();
   }

   deleteBranch(branch: Branch) {
    this.bservice.deleteBranch(branch).subscribe();
   }

   deleteRole(role: Role) {
    this.bservice.deleteRole(role).subscribe();
   }
  }

