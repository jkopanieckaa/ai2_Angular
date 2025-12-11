import { Routes } from '@angular/router';
import { List } from './persons/list/list';
import { AddPerson } from './persons/add-person/add-person';
import { Details } from './persons/details/details';

export const routes: Routes = [
  { path: '', component: List },
  { path: 'add', component: AddPerson },
  { path: 'details/:id', component: Details },
];
