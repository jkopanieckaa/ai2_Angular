import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {

  items: string[] = [];
  newItem: string = '';

  addItem() {
    const value = this.newItem.trim();
    if (value.length > 0) {
      this.items.push(value);
      this.newItem = ''; // czyścimy input
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
