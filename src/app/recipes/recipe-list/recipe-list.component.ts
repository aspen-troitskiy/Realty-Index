import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import Recipe from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'one more string', 'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'),
    new Recipe('A test Recipe 2', 'one more string 2', 'https://c.pxhere.com/photos/bd/fe/dishes_kitchen_bio_food_recipe_meals_home_made_eat-657279.jpg!d'),
    new Recipe('A test Recipe 3', 'one more string 3', 'https://c.pxhere.com/photos/b0/0e/kitchen_recipe_carrots_oranges_cumin_mint_salad_eat-1389228.jpg!d'),
  ];
  @Output() selectedItemEmitting = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelect(element: Recipe){
    this.selectedItemEmitting.emit(element);
  }
}