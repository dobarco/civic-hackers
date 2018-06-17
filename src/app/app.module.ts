import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { InsightsComponent } from './components/insights/insights.component';
import { InsightService } from './services/insight.service';
import { HttpModule } from '@angular/http';
import { CompareComponent } from './components/compare/compare.component';
import { MarketComponent } from './components/market/market.component';

const appRoutes = [
  {path: '', component: HomeComponent},
  {path: 'insights', component: InsightsComponent},
  {path: 'compare', component: CompareComponent},
  {path: 'market', component: MarketComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    InsightsComponent,
    CompareComponent,
    MarketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [InsightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
