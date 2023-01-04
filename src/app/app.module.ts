import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ContactIndexComponent } from './views/contact-index/contact-index.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactPreviewComponent } from './contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { ContactFilterComponent } from './contact-filter/contact-filter.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './views/home/home.component';
import { StatisticPageComponent } from './views/statistic-page/statistic-page.component';
import { AwasomeChartComponent } from './awasome-chart/awasome-chart.component';
import { EditContactComponent } from './views/edit-contact/edit-contact.component';
import { SignupPageComponent } from './views/signup-page/signup-page.component';
import { TransferFundComponent } from './transfer-fund/transfer-fund.component';
import { MoveListComponent } from './move-list/move-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ContactIndexComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactFilterComponent,
    HomeComponent,
    StatisticPageComponent,
    AwasomeChartComponent,
    EditContactComponent,
    SignupPageComponent,
    TransferFundComponent,
    MoveListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
