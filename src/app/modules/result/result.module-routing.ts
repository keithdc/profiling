import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ResultComponent} from "./result.component";


const routes: Routes = [
  {
    path: '',
    component: ResultComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultModuleRouting {
}
