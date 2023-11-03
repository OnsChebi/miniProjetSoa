import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
export interface PeriodicElement {
  class: string;
  position: number;
  Date: number;
  Time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, class: 'Hydrogen', Date: 1.0079, Time: 'H'},
  {position: 2, class: 'Helium', Date: 4.0026, Time: 'He'},
  {position: 3, class: 'Lithium', Date: 6.941, Time: 'Li'},
  {position: 4, class: 'Beryllium', Date: 9.0122, Time: 'Be'},
  {position: 5, class: 'Boron', Date: 10.811, Time: 'B'},
  {position: 6, class: 'Carbon', Date: 12.0107, Time: 'C'},
  {position: 7, class: 'Nitrogen', Date: 14.0067, Time: 'N'},
  {position: 8, class: 'Oxygen', Date: 15.9994, Time: 'O'},
  {position: 9, class: 'Fluorine', Date: 18.9984, Time: 'F'},
  {position: 10, class: 'Neon', Date: 20.1797, Time: 'Ne'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  displayedColumns: string[] = ['position', 'class', 'Date', 'Time'];
  dataSource = ELEMENT_DATA;

}
