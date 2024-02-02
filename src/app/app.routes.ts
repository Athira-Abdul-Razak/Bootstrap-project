import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';

export const APP_ROUTES: Route[] = [{
  path: '',
  component: HomeComponent,
},
{ path: 'about', component: AboutComponent },
{ path: 'home', component: HomeComponent },
{ path: 'services', component: ServicesComponent },
{ path: 'footer', component: FooterComponent },
];
