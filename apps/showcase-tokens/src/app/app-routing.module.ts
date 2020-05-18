import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  ExtraOptions,
} from '@angular/router';

import { ColorComponent } from './features/color/color.component';
import { LandingComponent } from './features/landing/landing.component';
import { TypographyComponent } from './features/typography/typography.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'color',
    component: ColorComponent,
  },
  {
    path: 'typography',
    component: TypographyComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
