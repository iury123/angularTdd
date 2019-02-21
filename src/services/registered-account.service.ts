import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisteredAccount } from 'src/models/registered-account.model';

@Injectable({
  providedIn: 'root'
})
export class RegisteredAccountService {

  constructor() { }

  public getRegisteredAccounts(): Observable<RegisteredAccount[]> {
    return null;
  }


}
