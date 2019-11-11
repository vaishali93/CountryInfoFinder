import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  AfterContentInit
} from "@angular/core";
import { CountryService } from "../country.service";

@Component({
  selector: "app-country-list",
  templateUrl: "./country-list.component.html",
  styleUrls: ["./country-list.component.css"]
})
export class CountryListComponent implements OnInit, AfterContentInit {
  filteredCountries: string[];

  @Output()
  countryDetail = new EventEmitter();

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.countryList.subscribe(() => {
      this.filteredCountries = this.countryService.getCountryList();
    });
  }

  ngAfterContentInit() {
    this.filteredCountries = this.countryService.getCountryList();
  }

  selectedCountry(event) {
    const countryDetail = this.countryService.getCountryDetailByName(
      event.target.text
    );
    this.countryDetail.emit(countryDetail);
  }
}
