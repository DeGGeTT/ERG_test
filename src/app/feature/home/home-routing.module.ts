import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRootComponent } from './containers/home-root/home-root.component';

const routes: Routes = [
  {
    path: '',
    component: HomeRootComponent,
    data: { title: 'Home' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}