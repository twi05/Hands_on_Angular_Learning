import { Component } from '@angular/core';
import { Tag } from '../../../shared/models/Tag';
import { FoodService } from '../../../services/food.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
})
export class TagsComponent {
  tags?: Tag[];
  constructor(foodService: FoodService) {
    this.tags = foodService.getAllTags();
  }
}
