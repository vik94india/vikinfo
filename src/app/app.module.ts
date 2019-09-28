import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HeaderBrandComponent } from './header-brand/header-brand.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { FooterBrandComponent } from './footer-brand/footer-brand.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SliderComponent } from './slider/slider.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { OtherComponent } from './other/other.component';
import { LinksModule } from './links/links.module';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HeaderBrandComponent,
    FooterBarComponent,
    FooterBrandComponent,
    SideBarComponent,
    SliderComponent,
    MainSectionComponent,
    OtherComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LinksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
