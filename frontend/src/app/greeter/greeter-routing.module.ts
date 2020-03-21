import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GreeterPage } from './greeter.page';

const routes: Routes = [
  {
    path: '',
    component: GreeterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GreeterPageRoutingModule {}
