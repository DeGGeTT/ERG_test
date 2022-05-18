import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRootComponent } from '../home/containers/home-root/home-root.component';
import { SpecificationsRootComponent } from './containers/specifications-root/specifications-root.component';

const routes: Routes = [
  {
    path: '',
    component: SpecificationsRootComponent,
    data: { title: 'Specifications' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecificationsRoutingModule {}