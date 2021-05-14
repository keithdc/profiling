import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultModuleRouting} from "./result.module-routing";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {ResultComponent} from "./result.component";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [ResultComponent],
  imports: [
    CommonModule,
    ResultModuleRouting,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class ResultModule {
}
