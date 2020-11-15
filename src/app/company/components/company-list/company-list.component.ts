import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
import {
  getCompanies,
  initCities,
  initCompanies,
  initCountries,
  initEmployees,
  selectCompany,
} from "../../store/actions/company.actions";
import { selectCompanies } from "../../store/selectors";
import { ICompany } from "../../types/company.interface";
import { CompanyListDataSource } from "./company-list-datasource";

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: "app-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.scss"],
})
export class CompanyListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<ICompany>;
  dataSource: CompanyListDataSource;
  companies$: Observable<ICompany[]>;

  constructor(private store: Store, private router: Router) {}

  displayedColumns = ["id", "nameRu", "nameKz", "bin"];

  ngOnInit() {
    this._initializeValues();
    this.dataSource = new CompanyListDataSource();
  }

  _initializeValues(): void {
    this.store.dispatch(initCompanies());
    this.store.dispatch(initCountries());
    this.store.dispatch(initCities());
  }

  rowSelected(id: string) {
    this.store.dispatch(initEmployees({request: id}));
    this.store.select(selectCompanies).pipe(take(1), map((x) => {
      if (x)
      {
        const company: ICompany = null;
        x.forEach((y) => {
          if (y.id == id)
          {
            this.store.dispatch(selectCompany({model: y}));
          }
        })
      }
    })).subscribe();
    this.router.navigate(['./employee-list']);
  }

  ngAfterViewInit() {
    this.store.select(selectCompanies).pipe(map((x) => {
      if (x && x.length > 0)
      {
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
