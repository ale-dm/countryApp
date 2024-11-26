import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './byCountryPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ByCountryPageComponent implements OnInit{ 
  
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByPais ( term: string ):void {
    this.isLoading = true;
    this.countriesService.searchPais(term)
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false
      });
  }
  
}
