import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private router: Router) {}

    username = '';
    password = '';
    ngOnInit() {
        // localStorage.setItem('isLoggedin', 'true');
    }

    onLogin(u, p) {
        console.log('in login');
        if (u === 're' && p === 're') {
            console.log('in if');
            // localStorage.setItem('isLoggedin', 'true');
            sessionStorage.setItem('role', 're');
            this.router.navigateByUrl('/role/re/dashboard');
        }
        if (u === 'oe' && p === 'oe') {
            // localStorage.setItem('isLoggedin', 'true');
            sessionStorage.setItem('role', 'oe');
            this.router.navigateByUrl('/role/oe/dashboard');
        }
        if (u === 'cm' && p === 'cm') {
            // localStorage.setItem('isLoggedin', 'true');
            sessionStorage.setItem('role', 'cm');
            this.router.navigateByUrl('/role/cm/dashboard');
        }
        if (u === 'ah' && p === 'ah') {
            // localStorage.setItem('isLoggedin', 'true');
            sessionStorage.setItem('role', 'ah');
            this.router.navigateByUrl('/role/ah/dashboard');
        }
        if (u === 'ld' && p === 'ld') {
            // localStorage.setItem('isLoggedin', 'true');
            sessionStorage.setItem('role', 'ld');
            this.router.navigateByUrl('/role/ld/dashboard');
        }
        if (u === 'bm' && p === 'bm') {
            // localStorage.setItem('isLoggedin', 'true');
            sessionStorage.setItem('role', 'bm');
            this.router.navigateByUrl('/role/bm/dashboard');
        }
        if (u === 'admin' && p === 'admin') {
            sessionStorage.setItem('role', 'admin');
            this.router.navigateByUrl('/role/admin/add');
        }

        // this.router.navigate(['/dashboard']);
       // this.router.navigate(['/RE/dashboard']);
    }

}
