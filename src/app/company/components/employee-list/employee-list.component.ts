import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { initEmployees } from '../../store/actions/company.actions';
import { getSelectedCompany, selectCompanies, selectEmployees } from '../../store/selectors';
import { IEmployee } from '../../types/employee.interface';
import { EmployeeListDataSource } from './employee-list-datasource';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.scss"],
})
export class EmployeeListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<IEmployee>;
  dataSource: EmployeeListDataSource;
  companies$: Observable<IEmployee[]>;

  constructor(private store: Store, private router: Router) {}

  displayedColumns = ["id", "firstName", "secondName", "patronymic", "phoneNumber", "email"];

  ngOnInit() {
    this._initializeValues();
    this.dataSource = new EmployeeListDataSource();
  }

  _initializeValues(): void {
    this.store.select(getSelectedCompany).pipe(take(1), map((x) => {
      this.store.dispatch(initEmployees({request: x.id}));
    }))
  }

  addEmployee() {
    this.router.navigate(['./add-employee']);
  }

  ngAfterViewInit() {
    this.store.select(selectEmployees).pipe(map((x) => {
      if (x && x.length > 0)
      {
        console.log(x);
        const data = this.dataSource.data;
        x.forEach((elem) => data.push(elem))
        this.dataSource.data = data;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
        this.table.renderRows();
      }
    })).subscribe();
  }
}
