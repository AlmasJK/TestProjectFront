import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICompany } from "../types/company.interface";
import { ICity, ICountry } from '../types/dict.interface';
import { IEmployee } from "../types/employee.interface";

@Injectable()
export class InternalCompanyService {
  constructor(protected url: string, private http: HttpClient) {}

  getCompanies = () =>
    this.http.get<ICompany[]>(`${this.url}/Company/GetCompanies`);

  createCompany = (model: ICompany) =>
    this.http.post<string>(`${this.url}/Company/CreateCompany`, model);

  deleteCompany = (id: string) =>
    this.http.post<boolean>(`${this.url}/Company/DeleteCompany`, id);

  updateCompany = (model: ICompany) =>
    this.http.post<ICompany>(`${this.url}/Company/UpdateCompany`, model);

  getCompany = (id: string) =>
    this.http.get<ICompany>(`${this.url}/Company/GetCompany?companyId=${id}`);

  getEmployees = (request: string) =>
    this.http.get<IEmployee[]>(
      `${this.url}/Employee/GetEmployeesByCompanyId?companyId=${request}`
    );

  createEmployee = (model: IEmployee) =>
    this.http.post<string>(`${this.url}/Employee/CreateEmployee`, model);

  deleteEmployee = (id: string) =>
    this.http.post<boolean>(`${this.url}/Employee/DeleteEmployee`, id);

  updateEmployee = (model: IEmployee) =>
    this.http.post<IEmployee>(`${this.url}/Employee/UpdateEmployee`, model);

  getEmployee = (id: string) =>
    this.http.get<IEmployee>(`${this.url}/Employee/GetEmployee`);

  getCountries = () =>
    this.http.get<ICountry[]>(
      `${this.url}/Dict/GetCountries`
    );

  getCities = () =>
    this.http.get<ICity[]>(
      `${this.url}/Dict/GetCities`
    );
}
