import { Action, createReducer, on } from '@ngrx/store';
import { ICompanies, IDicts, IEmployees } from 'src/app/shared/types/store.interface';
import { citiesFailure, companiesFailure, countriesFailure, employeesFailure, getCities, getCompanies, getCountries, getEmployees, initCities, initCompanies, initCountries, initEmployees, postEmployee, selectCompany, selectEmployee } from './actions/company.actions';

const companiesInitialState: ICompanies = {
    listOfCompanies: [],
    selectedCompany: null
};

const companyReducer = createReducer(
    companiesInitialState,
    on(
        initCompanies,
        (state): ICompanies => ({
            ...state,
            listOfCompanies: [],
            selectedCompany: null
        })
    ),
    on(
        getCompanies,
        (state, action): ICompanies => ({
            ...state,
            listOfCompanies: action.model,
            selectedCompany: null
        })
    ),
    on(
        companiesFailure,
        (state): ICompanies => ({
            ...state,
            listOfCompanies: [],
            selectedCompany: null
        })
    ),
    on(
        selectCompany,
        (state, action): ICompanies => ({
            ...state,
            selectedCompany: action.model
        })
    )
)

export function companyReducers(state: ICompanies, action: Action) {
  return companyReducer(state, action)
}

const employeeInitialState: IEmployees = {
    listOfEmployees: [],
    selectedEmployee: null
};

const employeeReducer = createReducer(
    employeeInitialState,
    on(
        initEmployees,
        (state): IEmployees => ({
            ...state,
            listOfEmployees: [],
            selectedEmployee: null
        })
    ),
    on(
        getEmployees,
        (state, action): IEmployees => ({
            ...state,
            listOfEmployees: action.model,
            selectedEmployee: null
        })
    ),
    on(
        employeesFailure,
        (state): IEmployees => ({
            ...state,
            listOfEmployees: [],
            selectedEmployee: null
        })
    ),
    on(
        selectEmployee,
        (state, action): IEmployees => ({
            ...state,
            selectedEmployee: action.model
        })
    ),
    on(
        postEmployee,
        (state, action): IEmployees => ({
            ...state,
        })
    )
)

export function dictReducers(state: IDicts, action: Action) {
  return dictReducer(state, action)
}

const dictInitialState: IDicts = {
    cities: [],
    countries: []
};

const dictReducer = createReducer(
    dictInitialState,
    on(
        initCountries,
        (state): IDicts => ({
            ...state,
            countries: []
        })
    ),
    on(
        getCountries,
        (state, action): IDicts => ({
            ...state,
            countries: action.model
        })
    ),
    on(
        countriesFailure,
        (state): IDicts => ({
            ...state,
            countries: []
        })
    ),
    on(
        initCities,
        (state): IDicts => ({
            ...state,
            cities: []
        })
    ),
    on(
        getCities,
        (state, action): IDicts => ({
            ...state,
            cities: action.model
        })
    ),
    on(
        citiesFailure,
        (state): IDicts => ({
            ...state,
            cities: []
        })
    ),
)

export function employeeReducers(state: IEmployees, action: Action) {
  return employeeReducer(state, action)
}