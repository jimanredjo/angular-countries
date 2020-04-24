import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { HomeComponent } from './home/home.component';
import { CountryDetailsComponent } from './country-list/components/country-details/country-details.component';

const routes: Routes = [
  {path:  '', pathMatch:  'full', redirectTo:  'home'},
  {path:  'home', component: HomeComponent},
  {path: 'country-list', component: CountryListComponent},
  {path: 'country-details/:name', component: CountryDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
