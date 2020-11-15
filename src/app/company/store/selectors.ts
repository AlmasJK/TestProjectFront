import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICompanies, IDicts, IEmployees, IStore } from 'src/app/shared/types/store.interface';

export const companyFeatureSelector = createFeatureSelector<
  IStore,
  ICompanies
>('companyStore')

export const employeeFeatureSelector = createFeatureSelector<
  IStore,
  IEmployees
>('employeeStore')

export const dictFeatureSelector = createFeatureSelector<
  IStore,
  IDicts
>('dictStore')

export const selectCompanies = createSelector(companyFeatureSelector, ((x: ICompanies) => x.listOfCompanies))

export const getSelectedCompany = createSelector(companyFeatureSelector, ((x: ICompanies) => x.selectedCompany))


export const selectEmployees = createSelector(employeeFeatureSelector, ((x: IEmployees) => x.listOfEmployees))

export const getSelectedEmployee = createSelector(employeeFeatureSelector, ((x: IEmployees) => x.selectedEmployee))

export const selectCities = createSelector(dictFeatureSelector, ((x: IDicts) => x.cities))

export const selectCountries = createSelector(dictFeatureSelector, ((x: IDicts) => x.countries))
