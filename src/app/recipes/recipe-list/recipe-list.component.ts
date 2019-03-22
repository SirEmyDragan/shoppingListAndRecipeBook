import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe', 'This is simply a test',
    'https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1365/gallery-1503418862-chicken-thighs-delish.jpg'),
    new Recipe('A Test Recipe2', 'This is simply a test',
    'https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1365/gallery-1503418862-chicken-thighs-delish.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
