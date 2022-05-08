import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const MODULES = [CommonModule, RouterModule];

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [],
  providers: [],
})
export class CoreModule {}
