import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { Subscribe } from './subscribe';
import { Styleguide } from './styleguide';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: Home },
  { path: 'styleguide',  component: Styleguide },
  { path: 'home',  component: Home },
  { path: 'about', component: About },
  { path: 'subscribe', component: Subscribe },
  
  { path: '**',    component: NoContent },
];
