import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { PersonService, Person } from '../person.service';


@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-person.html',
  styleUrl: './add-person.css'
})
export class AddPerson {

  person: Person = {
    address: {}
  };

  constructor(private service: PersonService, private router: Router) {}

  save() {
    this.service.add(this.person).subscribe({
      next: () => this.router.navigate(['/']),
    });

  }



}
