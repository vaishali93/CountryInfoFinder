import { Component, OnInit } from "@angular/core";
import { CountryService } from "../country/country.service";

@Component({
  selector: "app-search-header",
  templateUrl: "./search-header.component.html",
  styleUrls: ["./search-header.component.css"]
})
export class SearchHeaderComponent implements OnInit {
  name: string;

  constructor(private countryService: CountryService) {}

  ngOnInit() {}

  showValidationMsg(msg: string) {
    alert(msg);
    this.name = "";
  }

  onSearch() {
    let msg = "";
    if (!this.name || this.name.trim().length == 0) {
      msg = "Please enter a valid country";
      this.showValidationMsg(msg);
      return;
    }
    this.countryService.getCountriesList(this.name).subscribe(
      data => {
        this.countryService.setCountryDetailsData(data);
        this.countryService.setSearchedList(this.name);
      },
      error => {
        if (error.status === 404) {
          msg = "Search not found!!";
          this.showValidationMsg(msg);
          return;
        }
        if (error.status === 0) {
          msg = "Check your Internet connection!!";
          this.showValidationMsg(msg);
          return;
        }
        this.showValidationMsg(error.message);
      }
    );
  }
}
