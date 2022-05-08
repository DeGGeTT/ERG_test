import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRootComponent } from './containers/home-root/home-root.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeRatesComponent } from './containers/home-rates/home-rates.component';
import { ConvertRatePipe } from 'src/app/shared/pipes/convert-rate.pipe';
import { HomeCarouselComponent } from './containers/home-carousel/home-carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ContestCardComponent } from './components/contest-card/contest-card.component';
import { AnnouncementCardComponent } from './components/announcement-card/announcement-card.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { InstructionCardComponent } from './components/instruction-card/instruction-card.component';

@NgModule({
  declarations: [
    HomeRootComponent,
    HomeRatesComponent,
    HomeCarouselComponent,
    ConvertRatePipe,
    ContestCardComponent,
    NewsCardComponent,
    AnnouncementCardComponent,
    InstructionCardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule
  ]
})
export class HomeModule { }
