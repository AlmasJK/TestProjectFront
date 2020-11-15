import { Component, Input, OnInit } from '@angular/core'
import { IBackendErrors } from 'src/app/shared/types/backendErrors.interface'

@Component({
  selector: 'backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.components.scss']
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backend-errors') backendErrorsProps: IBackendErrors;

  errorMessages: string[];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const messages = this.backendErrorsProps[name].join(' ');
        return `${name} ${messages}`;
      }
    )
  }
}
