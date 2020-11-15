import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { IEmployee } from '../../types/employee.interface';

export class EmployeeListDataSource extends DataSource<IEmployee> {
  data: IEmployee[] = [];
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  connect(): Observable<IEmployee[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  disconnect() {}

  private getPagedData(data: IEmployee[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: IEmployee[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'birthDate': return compare(a.birthDate.getTime(), b.birthDate.getTime(), isAsc);
        case 'email': return compare(a.email, b.email, isAsc);
        case 'firstName': return compare(a.firstName, b.firstName, isAsc);
        case 'secondName': return compare(a.secondName, b.secondName, isAsc);
        case 'patronymic': return compare(a.patronymic, b.patronymic, isAsc);
        case 'phoneNumber': return compare(a.phoneNumber, b.phoneNumber, isAsc);
        case 'iin': return compare(a.iin, b.iin, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
