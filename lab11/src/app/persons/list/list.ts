import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PersonService, Person } from '../person';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List implements OnInit {

  persons: Person[] = [];

  constructor(private service: PersonService) {}

  ngOnInit(): void {
    this.persons = this.service.getAll();
  }

  delete(index: number): void {
    this.service.delete(index);
    this.persons = this.service.getAll();
  }
}
