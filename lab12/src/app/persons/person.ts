import { Injectable } from '@angular/core';

export interface Person {
  firstName?: string;
  familyName?: string;
  age?: number;
  address: {
    city?: string;
    street?: string;
    postCode?: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private storageKey = 'persons';

  constructor() {}

  getAll(): Person[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  getByIndex(index: number): Person | null {
    const data = this.getAll();
    return data[index] ?? null;
  }

  add(person: Person): void {
    const data = this.getAll();
    data.push(person);
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  delete(index: number): void {
    const data = this.getAll();
    data.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }
}
