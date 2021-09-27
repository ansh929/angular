import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Header', component: HeaderComponent },
   { path: 'Service', component: ServiceComponent },
   { path: 'Portfolio', component: PortfolioComponent },
   { path: 'Client', component: ClientComponent },
   { path: 'Contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }