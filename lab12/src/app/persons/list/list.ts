import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PersonService, Person } from '../person.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {

  persons: Person[] = [];

  constructor(private service: PersonService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getAll().subscribe(data => {
      this.persons = data;
    });
  }


  delete(id: number) {
    this.service.delete(id).subscribe(() => {
      this.load();
    });
  }


}
