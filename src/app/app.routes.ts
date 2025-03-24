import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TechPageComponent } from './services/tech-page/tech-page.component';
import { MarketingPageComponent } from './services/marketing-page/marketing-page.component';
import { AutomationPageComponent } from './services/automation-page/automation-page.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'contact', component:ContactpageComponent},
    {path:'testimonials', component:TestimonialsComponent},
    {path:'tech', component:TechPageComponent},
    {path:'marketing', component:MarketingPageComponent},
    {path:'automation', component:AutomationPageComponent},
    {path:'projects', component:ProjectsComponent}
];
