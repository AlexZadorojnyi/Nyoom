import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CarsService } from './cars.service';

import { CompareComponent } from './compare/compare.component';
import { CompareHeaderComponent } from './compare/compare-header/compare-header.component';
import { CompareCarListComponent } from './compare/compare-car-list/compare-car-list.component';

import { SelectComponent } from './select/select.component';
import { SelectHeaderComponent } from './select/select-header/select-header.component';
import { SelectCarListComponent } from './select/select-car-list/select-car-list.component';
import { SelectGameListComponent } from './select/select-game-list/select-game-list.component';
import { SelectFilterCarsComponent } from './select/select-filter-cars/select-filter-cars.component';
import { SelectFilterGamesComponent } from './select/select-filter-games/select-filter-games.component';

import { SortGamesPipe } from './sort-games.pipe';
import { SortCarsPipe } from './sort-cars.pipe';

const routes = [
  { path: '', redirectTo: 'compare', pathMatch: 'full' },
  { path: 'compare', children: [
    { path: ':gameA/:setRelation/:gameB', component: CompareComponent },
    { path: '', pathMatch: 'full', redirectTo: 'NFSU/Union/NFSU2' }
  ] },
  { path: 'select', component: SelectComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CompareComponent,
    CompareHeaderComponent,
    CompareCarListComponent,
    SelectComponent,
    SelectHeaderComponent,
    SelectFilterCarsComponent,
    SelectFilterGamesComponent,
    SelectCarListComponent,
    SelectGameListComponent,
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
