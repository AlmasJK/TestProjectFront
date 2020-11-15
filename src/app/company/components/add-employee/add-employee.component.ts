import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { postEmployee } from '../../store/actions/company.actions';
import { getSelectedCompany, selectCities, selectCountries } from '../../store/selectors';
import { ICity, ICountry } from '../../types/dict.interface';

@Component({
  selector: "app-add-employee",
  templateUrl: "./add-employee.component.html",
  styleUrls: ["./add-employee.component.scss"],
})
export class AddEmployeeComponent implements OnInit {
  form: FormGroup;
  cities$: Observable<ICity[]>
  countries$: Observable<ICountry[]>

  constructor(private store: Store, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this._initializeForms();
    this._initializeValues();
  }

  _initializeForms(): void {
    this.form = this.fb.group({
      iin: ['', Validators.required],
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      patronymic: ['', Validators.required],
      birthDate: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      companyId: ['', Validators.required],
      countryId: ['', Validators.required],
      cityId: ['', Validators.required],
    });
  }

  _initializeValues(): void {
    this.countries$ = this.store.select(selectCountries);
    this.store.select(getSelectedCompany).pipe(take(1), map((x) => {
      this.form.value.companyId = x.id;
      this.form.patchValue({ companyId: x.id })
    })).subscribe();
  }

  setCountryId(countryId: string): void {
    this.cities$ = this.store.select(selectCities).pipe(map((cities) => {
      return cities.filter((x) => x.countryId === countryId);
    }))
    console.log("filtered cities");
  }

  submit(): void {
    console.log(this.form);
    if (this.form.valid) {
      this.store.dispatch(postEmployee({model: this.form.value}));
      this.router.navigate(['./employee-list']);
    }
  }
}
