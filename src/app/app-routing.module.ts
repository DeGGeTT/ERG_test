import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './containers/main/main.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../app/feature/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'specifications',
        loadChildren: () => import('../app/feature/specifications/specifications.module').then((m) => m.SpecificationsModule),
      }
    ],
  },
  { path: "404", component: PageNotFoundComponent },
  { path: "**", redirectTo: "404" },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
