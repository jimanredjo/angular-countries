import {Component, Input, OnInit} from '@angular/core';
import { CountryService } from '../../../country.service';
import { Country } from '../../../interfaceCountry';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  // @Input() country: Country;

  country: any;
  //
  // get country(): Country {
  //   return this.country;
  // }

  countryForm: FormGroup;


  constructor(private countryService: CountryService, private route: ActivatedRoute,  private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();

    // let name = this.route.snapshot.paramMap.get('name');
    // this.countryService.getCountry(name)
    //   .subscribe(country => this.country = country);

    this.country = this.route.params.subscribe(params => {
      const name: string = params.name; // (+) converts string 'id' to a number
      this.countryService.getCountry(name)
        .subscribe(country => this.country = country);
      // In a real app: dispatch action to load the details here.
    });
  }

  private initForm() {
    this.countryForm = this.fb.group({
      naam: [''],
      hoofdstad: [''],
      munteenheid: ['']
    });
  }

  getCountryByName(name: string) {
    this.countryService.getCountry(name).subscribe(
      (country: Country) => this.viewCountry(country),
      (err: any) => console.log(err)
    );
  }

}
