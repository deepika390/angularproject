
import { Role } from './role.model';

export class Branch {
    branch_id: number;
    brname: string;
    branch_type: string;
    branch_ifsc: string;
    branch_mfsc: string;
    branch_phno: number;
    branch_email: string;
    branch_address: string;
    branch_status: number;
    role: Role[];

}
