import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CarsService } from './cars.service';
import { CompareComponent } from './compare/compare.component';
import { HeaderCompareComponent } from './compare/header/header-compare.component';
import { CarListCompareComponent } from './compare/car-list/car-list-compare.component';
import { SelectComponent } from './select/select.component';
import { HeaderSelectComponent } from './select/header/header-select.component';
import { CarListSelectComponent } from './select/car-list/car-list-select.component';
import { GameListSelectComponent } from './select/game-list/game-list-select.component';
import { SortGamesPipe } from './sort-games.pipe';
import { SortCarsPipe } from './sort-cars.pipe';

const routes = [
  { path: '', redirectTo: 'compare', pathMatch: 'full' },
  { path: 'compare', component: CompareComponent },
  { path: 'select', component: SelectComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderCompareComponent,
    CarListCompareComponent,
    CarListSelectComponent,
    GameListSelectComponent,
    HeaderSelectComponent,
    CompareComponent,
    SelectComponent,
    SortGamesPipe,
    SortCarsPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
