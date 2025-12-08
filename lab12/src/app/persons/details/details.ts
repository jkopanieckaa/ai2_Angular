import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService, Person } from '../person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.html',
  styleUrl: './details.css'
})

export class Details implements OnInit {

  person?: Person | null;

  constructor(
    private route: ActivatedRoute,
    private service: PersonService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.person = this.service.getByIndex(id);
    });
  }
}
