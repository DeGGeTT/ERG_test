import { Component, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Rate, RateItem } from '../../models/rate.model';
import { RatesApiService } from '../../services/home-rates.service';

@Component({
  selector: 'erg-home-rates',
  templateUrl: './home-rates.component.html',
  styleUrls: ['./home-rates.component.scss'],
  providers: [RatesApiService]
})
export class HomeRatesComponent implements OnInit {
  private destroy$ = new Subject();
  public conversionRates!: RateItem;


  constructor(private ratesApiService: RatesApiService) {
    interval(5 * 60 * 1000 ).pipe(
      takeUntil(this.destroy$)).subscribe((() => {
        this.getRates();
      }));
  }

  ngOnInit(): void {
    this.getRates();
  }

  getRates() {
    this.ratesApiService.getRates().pipe(
      takeUntil(this.destroy$)).subscribe((rate: Rate) => {
        this.conversionRates = rate.conversion_rates;
      })
  }
}
