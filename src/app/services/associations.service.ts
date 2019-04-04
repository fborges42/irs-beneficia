import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssociationsService {
  constructor(private http: HttpClient) {}

  getAssociations(): Observable<any> {
    return this.http.get<any>('assets/json/data.json');
  }
}
