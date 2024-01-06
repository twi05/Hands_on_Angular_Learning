import { Component } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { StarRatingComponent } from 'ng-starrating';
// Import CurrencyPipe in your module or component
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss',
})
export class FoodPageComponent {
  food!: Food;
  constructor(activatedRoute: ActivatedRoute, foodService: FoodService) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) this.food = foodService.getFoodById(params['id']);
    });
  }
}
