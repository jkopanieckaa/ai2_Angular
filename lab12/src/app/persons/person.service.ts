import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Address {
  city?: string;
  street?: string;
  postCode?: string;
}
export interface Person {
  id?: number;
  firstName?: string;
  familyName?: string;
  age?: number;
  address?: Address;
}

@Injectable({
  providedIn: 'root'})
export class PersonService {

  private api = 'http://localhost:8080/api/persons';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.api);
  }
  getById(id: number) {
    return this.http.get<Person>(`http://localhost:8080/api/persons/${id}`);
  }
  add(person: Person): Observable<Person> {
    return this.http.post<Person>(this.api, person);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
