import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { List } from './persons/list/list';
import { AddPerson } from './persons/add-person/add-person';
import { Details } from './persons/details/details';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    List,
    AddPerson,
    Details
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
