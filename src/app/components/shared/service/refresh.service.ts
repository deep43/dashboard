import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class RefreshService {
  private refreshedData = new Subject<any>();

  setRefreshedData(changed: boolean) {
    this.refreshedData.next(changed);
  }

  getRefreshedData(): Observable<any> {
    return this.refreshedData.asObservable();
  }
}
