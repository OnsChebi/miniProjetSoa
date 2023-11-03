import { Component } from '@angular/core';
export interface PeriodicElement {
  Nom : string;
  position: number;
  Prénom: number;
  absence: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Nom : 'Hydrogen', Prénom: 1.0079, absence: 'H'},
  {position: 2, Nom : 'Helium', Prénom: 4.0026, absence: 'He'},
  {position: 3, Nom : 'Lithium', Prénom: 6.941, absence: 'Li'},
  {position: 4, Nom : 'Beryllium', Prénom: 9.0122, absence: 'Be'},
  {position: 5, Nom : 'Boron', Prénom: 10.811, absence: 'B'},
  {position: 6, Nom : 'Carbon', Prénom: 12.0107, absence: 'C'},
  {position: 7, Nom : 'Nitrogen', Prénom: 14.0067, absence: 'N'},
  {position: 8, Nom : 'Oxygen', Prénom: 15.9994, absence: 'O'},
  {position: 9, Nom : 'Fluorine', Prénom: 18.9984, absence: 'F'},
  {position: 10, Nom : 'Neon', Prénom: 20.1797, absence: 'Ne'},
];

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class  StudentsListComponent {
  displayedColumns: string[] = ['position', 'Nom ', 'Prénom', 'absence'];
  dataSource = ELEMENT_DATA;


}
