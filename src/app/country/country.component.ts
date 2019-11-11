import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.service';
import { Country } from './country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  isListView: Boolean = true;
  countryDetail: Country;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
  }
  countryDetailSelected(countryDetail: Country){
    this.isListView = false;
    this.countryDetail = countryDetail;
  }

  onListReload(){
    this.isListView = true;
    this.countryService.countryList.emit();
  }
}
