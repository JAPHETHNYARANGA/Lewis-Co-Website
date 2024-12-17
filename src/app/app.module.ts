import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HompePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrandsComponent } from './components/brands/brands.component';
import { HelpPageComponent } from './components/help-page/help-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ColaborationPageComponent } from './components/colaboration-page/colaboration-page.component';
import { TopSectionComponent } from './components/top-section/top-section.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HompePageComponent,
    NavbarComponent,
    BrandsComponent,
    HelpPageComponent,
    ProjectsPageComponent,
    FooterComponent,
    ColaborationPageComponent,
    TopSectionComponent,
    TestimonialsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
