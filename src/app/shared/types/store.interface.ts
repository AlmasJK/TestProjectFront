import { ICompany } from 'src/app/company/types/company.interface';
import { ICity, ICountry } from 'src/app/company/types/dict.interface';
import { IEmployee } from 'src/app/company/types/employee.interface';

export interface IStore {
    companyStore: ICompanies
    employeeStore: IEmployees
    dictStore: IDicts
}

export interface ICompanies {
    listOfCompanies: ICompany[] | null;
    selectedCompany: ICompany | null;
}

export interface IEmployees {
    listOfEmployees: IEmployee[] | null;
    selectedEmployee: IEmployee | null;
}

export interface IDicts {
    cities: ICity[] | null;
    countries: ICountry[] | null;
}