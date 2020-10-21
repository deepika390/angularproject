import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BankDetails } from 'src/app/model/bankdetails.model';
import { Branch } from 'src/app/model/branch.model';
import { Role } from 'src/app/model/role.model';

@Injectable({
  providedIn: 'root'
})
export class BankserviceService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:9092/getBankData';

  url1 = 'http://localhost:9092/getBranchData';

  url2 = 'http://localhost:9092/getRoleData';

  url3 = 'http://localhost:9090';

  bank: BankDetails[];



  allBanks(): Observable<any> {
    return this.http.get(this.url);
  }

  allBranch(): Observable<any> {
    return this.http.get(this.url1);
  }

  allRole(): Observable<any> {
    return this.http.get(this.url2);
  }

  deleteData(bank: BankDetails) {
    return this.http.delete(`${this.url3}/deleteBank/${bank.bid}`);
  }

  deleteBranch(branch: Branch) {
    return this.http.delete(`${this.url3}/deleteBranch/${branch.branch_id}`);
  }

  deleteRole(role: Role) {
    return this.http.delete(`${this.url3}/deleteRole/${role.rid}`);
  }
}
