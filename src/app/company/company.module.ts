import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { PublicCompanyService } from './services/public-company.service';
import { CompanyEffect } from './store/effects/company.effects';
import { companyReducers, dictReducers, employeeReducers } from './store/reducers';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatMomentDateModule,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';

const routes = [
  {
    path: 'company-list',
    component: CompanyListComponent
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent
  },
  {
    path: 'add-employee',
    component: AddEmployeeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('companyStore', companyReducers),
    StoreModule.forFeature('employeeStore', employeeReducers),
    StoreModule.forFeature('dictStore', dictReducers),
    EffectsModule.forFeature([CompanyEffect]),
    BackendErrorMessagesModule,
    MatCardModule,
    MatIconModule,
    MatSortModule,
    MatMenuModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule,
    MatDividerModule,
    MatMomentDateModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDatepickerModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CompanyListComponent, EmployeeListComponent, AddEmployeeComponent],
  providers: [PublicCompanyService]
})
export class CompanyModule {}
