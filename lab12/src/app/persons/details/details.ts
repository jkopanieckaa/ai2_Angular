import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.html',
  imports: [CommonModule]
})
export class Details {
  person: Person = {
    id: 0,
    firstName: '',
    familyName: '',
    age: 0,
    address: {
      city: '',
      street: '',
      postCode: ''
    }
  };
  constructor(private route: ActivatedRoute, private service: PersonService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log("ID z URL:", id);

    this.service.getById(id).subscribe({
      next: (person) => {
        console.log("Odebrano osobę z backendu:", person);
        this.person = person;
      },
      error: (err) => console.error("Błąd pobierania:", err)
    });
  }




}
