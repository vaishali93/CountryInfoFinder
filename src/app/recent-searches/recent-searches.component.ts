import { Component, OnInit } from "@angular/core";
import { CountryService } from "../country/country.service";

@Component({
  selector: "app-recent-searches",
  templateUrl: "./recent-searches.component.html",
  styleUrls: ["./recent-searches.component.css"]
})
export class RecentSearchesComponent implements OnInit {
  countrySearchList: string[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.searchList.subscribe(() => {
      this.countrySearchList = this.countryService.getSearchedList();
    });
  }

  loadList(event) {
    let searchName = event.target.text;
    this.countryService.getCountriesList(searchName).subscribe(
      data => {
        this.countryService.setCountryDetailsData(data);
      },
      error => {
        alert(error);
      }
    );
  }
}
