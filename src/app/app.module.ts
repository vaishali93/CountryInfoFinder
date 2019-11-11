import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { CountryComponent } from './country/country.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { CountryDetailComponent } from './country/country-detail/country-detail.component';
import { RecentSearchesComponent } from './recent-searches/recent-searches.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchHeaderComponent,
    CountryComponent,
    CountryListComponent,
    CountryDetailComponent,
    RecentSearchesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
