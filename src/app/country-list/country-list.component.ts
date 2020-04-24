import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import {Country} from '../interfaceCountry';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  title = 'Country List';

  countryList;

  selectedCountry: Country;

  constructor(private countryService: CountryService, private router: Router){ }

  ngOnInit(): void {
    this.getCountries();

  }

  onSelect(country): void {
    this.selectedCountry = country;
    this.router.navigate(['/country-details', country.name]);
  }

  getCountries() {
    this.countryService.getCountries().subscribe(countries => this.countryList = countries);
  }
}
