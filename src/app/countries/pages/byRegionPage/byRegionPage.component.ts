import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './byRegionPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class ByRegionPageComponent { 

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByRegion ( term: string ):void {
    this.countriesService.searchRegion(term)
      .subscribe( countries => {
        this.countries = countries;
      });
  }

}
