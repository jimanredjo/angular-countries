import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

// styling
import {MatMenuModule} from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

import { CountryListComponent } from './country-list/country-list.component';
import { HomeComponent } from './home/home.component';
import { CountryDetailsComponent } from './country-list/components/country-details/country-details.component';
import { CountrySearchComponent } from './country-list/components/country-search/country-search.component';
import {CountryService} from './country.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CountryListComponent,
    HomeComponent,
    CountryDetailsComponent,
    CountrySearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    // styling
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    ReactiveFormsModule,

    // sub-modules
    // CountriesModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
