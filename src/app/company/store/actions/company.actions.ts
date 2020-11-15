import { createAction, props } from '@ngrx/store';
import { ICompany } from '../../types/company.interface';
import { ICity, ICountry } from '../../types/dict.interface';
import { IEmployee } from '../../types/employee.interface';
import { CompanyActionTypes } from '../actionTypes';

export const initCompanies = createAction(
    CompanyActionTypes.INIT_COMPANIES
)

export const getCompanies = createAction(
    CompanyActionTypes.GET_COMPANIES,
    props<{model: ICompany[]}>()
)

export const companiesFailure = createAction(
    CompanyActionTypes.COMPANIES_FAILURE
)

export const initEmployees = createAction(
    CompanyActionTypes.INIT_EMPLOYEES,
    props<{request: string}>()
)

export const getEmployees = createAction(
    CompanyActionTypes.GET_EMPLOYEES,
    props<{model: IEmployee[]}>()
)

export const postEmployee = createAction(
    CompanyActionTypes.POST_EMPLOYEE,
    props<{model: IEmployee}>()
)

export const employeesFailure = createAction(
    CompanyActionTypes.EMPLOYEES_FAILURE
)

export const selectEmployee = createAction(
    CompanyActionTypes.SELECT_EMPLOYEE,
    props<{model: IEmployee}>()
)

export const selectCompany = createAction(
    CompanyActionTypes.SELECT_COMPANY,
    props<{model: ICompany}>()
)

export const initCountries = createAction(
    CompanyActionTypes.INIT_COUNTRIES
)

export const getCountries = createAction(
    CompanyActionTypes.GET_COUNTRIES,
    props<{model: ICountry[]}>()
)

export const countriesFailure = createAction(
    CompanyActionTypes.COUNTRIES_FAILURE
)


export const initCities = createAction(
    CompanyActionTypes.INIT_CITIES
)

export const getCities = createAction(
    CompanyActionTypes.GET_CITIES,
    props<{model: ICity[]}>()
)

export const citiesFailure = createAction(
    CompanyActionTypes.CITIES_FAILURE
)