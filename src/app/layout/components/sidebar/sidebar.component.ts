import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/model/menu';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    public showMenu: string;
    menuItems: any[];
    role: string;
    constr;
    // role: string; uctor() {}

    ngOnInit() {
        this.menuItems = Menu.menu;
        console.log(this.menuItems);
        this.role = sessionStorage.getItem('role');
        console.log(this.role);
        // this.showMenu = ''; console.log(this.menuItems);

    }


    // addExpandClass(element: any) {
    //     if (element === this.showMenu) {
    //         this.showMenu = '0';
    //     } else {
    //         this.showMenu = element;
    //     }
    // }
}
