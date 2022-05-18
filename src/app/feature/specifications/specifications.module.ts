import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecificationsRoutingModule } from './specifications-routing.module';
import { SpecificationsRootComponent } from './containers/specifications-root/specifications-root.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SpecificationsRootComponent
  ],
  imports: [
    CommonModule,
    SpecificationsRoutingModule,
    ReactiveFormsModule
  ]
})
export class SpecificationsModule { }
