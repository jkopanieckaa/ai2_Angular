import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random.html',
  styleUrl: './random.css'
})
export class Random {

  @Input() max: number = 10;

  number: number | null = null;
  message: string = '';
  color: string = '';

  constructor(private randomService: RandomService) {}

  generate() {
    this.number = this.randomService.getRandom(this.max);

    if (this.number !== null && this.number <= this.max / 2) {
      this.message = 'Liczba jest mniejsza lub równa połowie zakresu.';
      this.color = 'green';
    } else {
      this.message = 'Liczba jest większa niż połowa zakresu.';
      this.color = 'red';
    }
  }
}
