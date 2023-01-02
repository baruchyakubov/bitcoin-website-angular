import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ContactIndexComponent } from './views/contact-index/contact-index.component';
import { StatisticPageComponent } from './views/statistic-page/statistic-page.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { ContactResolver } from './resolvers/contact.resolver';
import { EditContactComponent } from './views/edit-contact/edit-contact.component';

const routes: Routes = [
  { path: 'edit/:id' , component: EditContactComponent , resolve: {contact : ContactResolver} },
  { path: 'contact/:id' , component: ContactDetailsComponent , resolve: {contact : ContactResolver} },
  { path: 'edit' , component: EditContactComponent },
  { path: 'stats' , component: StatisticPageComponent },
  { path: 'contact' , component: ContactIndexComponent },
  { path: '' , component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
