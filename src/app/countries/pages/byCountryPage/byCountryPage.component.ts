import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './byCountryPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ByCountryPageComponent { 
  

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByPais ( term: string ):void {
    this.countriesService.searchPais(term)
      .subscribe( countries => {
        this.countries = countries;
      });
  }
  
}
