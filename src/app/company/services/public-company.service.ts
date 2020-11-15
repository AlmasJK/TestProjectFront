import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment';
import { InternalCompanyService } from './internal-company.service';

@Injectable({ providedIn: 'root' })
export class PublicCompanyService extends InternalCompanyService {
  constructor(http: HttpClient) {
    super(`${environment.testUrl}`, http);
  }
}