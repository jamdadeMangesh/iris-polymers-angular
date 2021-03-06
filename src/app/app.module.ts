import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareersComponent } from './careers/careers.component';
import { MediaComponent } from './media/media.component';
import { routes } from './app.routing';
import { InfrastructureAndFacilityComponent } from './infrastructure-and-facility/infrastructure-and-facility.component';
import { ProductsComponent } from './products/products.component';
import { MulchFilmsComponent } from './mulch-films/mulch-films.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    CareersComponent,
    MediaComponent,
    InfrastructureAndFacilityComponent,
    ProductsComponent,
    MulchFilmsComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
