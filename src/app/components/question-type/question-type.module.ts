import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionTypeComponent} from "./question-type.component";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatAutocompleteModule} from "@angular/material/autocomplete";


@NgModule({
  declarations: [QuestionTypeComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatRadioModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatAutocompleteModule
  ],
  exports: [QuestionTypeComponent]
})
export class QuestionTypeModule {
}
