import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  title = 'Country List';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCountry = this.listFilter ? this.performFilter(this.listFilter) : this.countryList;
  }

  filteredCountry: Country[] = [];
  countryList: Country[] = [];

  constructor(private countryService: CountryService){ }

  performFilter(filterBy: string): Country[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.countryList.filter((country: Country) =>
      country.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.countryService.getCountries()
      .subscribe(countries => {
        this.countryList = countries;
        this.filteredCountry = this.countryList;
      });
  }
}
