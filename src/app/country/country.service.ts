import { Injectable, Output, EventEmitter } from "@angular/core";
import { Country } from "./country.model";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class CountryService {
  @Output()
  countryList = new EventEmitter();

  @Output()
  searchList = new EventEmitter();

  private countries: string[] = [];

  private countryDetailsList = [];

  private searchedList = new Set();

  constructor(private http: HttpClient) {}

  getCountriesList(name: string) {
    let queryString = environment.apiUrl + name;
    return this.http.get(queryString).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }

  setCountryDetailsData(countriesList) {
    this.countries = countriesList.map(country => {
      return country.name;
    });
    this.countryDetailsList = [];
    countriesList.forEach(countryDetail => {
      let detail = {};
      detail["name"] = countryDetail.name;
      detail["capital"] = countryDetail.capital;
      detail["population"] = countryDetail.population;
      detail["currency"] = countryDetail.currencies[0].name;
      detail["languages"] = [];
      countryDetail.languages.forEach(language => {
        detail["languages"].push(language.name);
      });
      detail["flagUrl"] = countryDetail.flag;
      this.countryDetailsList.push(detail);
    });
    this.countryList.emit();
  }

  getCountryList(): string[] {
    return this.countries;
  }

  setSearchedList(name: string){
    this.searchedList.add(name);
    this.searchList.emit();
  }

  getSearchedList(): string[]{
    let searchArray = Array.from(this.searchedList);
    if(searchArray.length > 5){
      this.searchedList.delete(Array.from(this.searchedList)[0]);
    }
    return Array.from(this.searchedList);
  }

  getCountryDetailByName(name: string): Country {
    return this.countryDetailsList.find(countryDetail => {
      return countryDetail.name === name;
    });
  }
}
