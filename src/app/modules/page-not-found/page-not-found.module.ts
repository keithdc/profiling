import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from "./page-not-found.component";
import {PageNotFoundRoutingModule} from "./page-not-found-routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    FlexLayoutModule,
    MatIconModule,
  ]
})
export class PageNotFoundModule {
}
