import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PopupComponent } from './popup/popup.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    PopupComponent,
    ServiceComponent,
    PortfolioComponent,
    ClientComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    
    BrowserAnimationsModule,
    
   
    

  ],
  providers: [],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
