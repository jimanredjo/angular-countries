import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { CountryService } from '../country.service';
import {Country} from '../interfaceCountry';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  title = 'Country List';
  // countryList;
  countryList;
  selectedCountry: Country;

  constructor(private http: HttpClient, private countryService: CountryService, private router: Router) { }

  ngOnInit(): void {
    this.getCountries();
    // this.countryList = this.countryService.getCountry();
    //
    // this.countryService.getCountry().subscribe(
    //   data => {
    //     this.countryList = data as string [];	 // FILL THE ARRAY WITH DATA.
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log (err.message);
    //   }
    // );

  }

  onSelect(country): void {
    console.log(country);
    // this.router.navigate(['country-details']);
  }

  private getCountries() {
    this.countryService.getCountry().subscribe(country => this.countryList = country);

  }
}
