import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { PublicCompanyService } from '../../services/public-company.service';
import { ICompany } from '../../types/company.interface';
import { switchMap, map, catchError } from 'rxjs/operators';
import { initCompanies, companiesFailure, getCompanies, initEmployees, getEmployees, employeesFailure, initCities, getCountries, countriesFailure, getCities, citiesFailure, postEmployee } from '../actions/company.actions';
import { Injectable } from '@angular/core';
import { IEmployee } from '../../types/employee.interface';
import { ICity, ICountry } from '../../types/dict.interface';

@Injectable()
export class CompanyEffect {
    constructor(
      private actions$: Actions,
      private publicCompanyService: PublicCompanyService,
      private router: Router
    ) {}

  loadCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initCompanies),
      switchMap(({}) => {
        return this.publicCompanyService.getCompanies().pipe(
          map((response: ICompany[]) => {
            return getCompanies({ model: response });
          }),
          catchError(() => {
            return of(companiesFailure());
          })
        );
      })
    )
  );

  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initEmployees),
      switchMap(({request}) => {
        return this.publicCompanyService.getEmployees(request).pipe(
          map((response: IEmployee[]) => {
            return getEmployees({ model: response });
          }),
          catchError(() => {
            return of(employeesFailure());
          })
        );
      })
    )
  );

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initCities),
      switchMap(() => {
        return this.publicCompanyService.getCountries().pipe(
          map((response: ICountry[]) => {
            return getCountries({ model: response });
          }),
          catchError(() => {
            return of(countriesFailure());
          })
        );
      })
    )
  );

  loadCities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initCities),
      switchMap(() => {
        return this.publicCompanyService.getCities().pipe(
          map((response: ICity[]) => {
            return getCities({ model: response });
          }),
          catchError(() => {
            return of(citiesFailure());
          })
        );
      })
    )
  );

  postEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postEmployee),
      switchMap(({model}) => {
        return this.publicCompanyService.createEmployee(model).pipe(
          map(() => {
            return initCompanies();
          })
        );
      })
    )
  );
}
