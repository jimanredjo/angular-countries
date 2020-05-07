import {Component, Input, OnInit} from '@angular/core';
import { CountryService } from '../../../country.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';
// import {Country} from '../../../country';
import {CountryName} from '../../../countryName';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  pageTitle = 'Country Detail';
  errorMessage = '';
  country: CountryName[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private countryService: CountryService) {
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('name');
    this.countryService.getCountry(param).subscribe(
      data => {
        this.country = data;
        console.log(data);
      }
    );
  }

    onBack(): void {
      this.router.navigate(['/country-list']);
    }

}
