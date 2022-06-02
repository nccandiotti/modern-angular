import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementHomeComponent } from './element-home/element-home.component';
// this is now an empty string because in the app routing element, we wrote the function for lazy loading (lazy loading vid 107)
const routes: Routes = [{ path: '', component: ElementHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementRoutingModule {}
