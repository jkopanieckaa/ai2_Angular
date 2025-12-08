import { Routes } from '@angular/router';

import { List } from './persons/list/list';
import { Details } from './persons/details/details';
import { AddPerson } from './persons/add-person/add-person';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: List },
  { path: 'details/:id', component: Details },
  { path: 'add', component: AddPerson },
  { path: '**', component: NotFound }
];
