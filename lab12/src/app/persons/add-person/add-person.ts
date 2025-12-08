import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Person, PersonService } from '../person';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-person.html',
  styleUrl: './add-person.css',
})

export class AddPerson {
  person: Person = {
    address: {}
  };

  constructor(
    private service: PersonService,
    private router: Router
  ) {}

  save() {
    this.service.add(this.person);
    this.router.navigate(['/']);
  }
}
