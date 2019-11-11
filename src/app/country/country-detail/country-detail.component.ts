import { Component, OnInit, Input } from "@angular/core";
import { Country } from "../country.model";
import { CountryService } from "../country.service";
import { ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "app-country-detail",
  templateUrl: "./country-detail.component.html",
  styleUrls: ["./country-detail.component.css"]
})
export class CountryDetailComponent implements OnInit {
  @Input()
  countryDetail: Country;

  constructor() {}

  ngOnInit() {}
}
