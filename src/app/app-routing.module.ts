import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import {HomeRootComponent} from "./feature/home/containers/home-root/home-root.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: HomeRootComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../app/feature/home/home.module').then((m) => m.HomeModule),
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
