import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotationRoutingModule } from './quotation-routing.module';
import { QuotationComponent } from './quotation.component';
import { DetailsComponent } from './details/details.component';
import { ProjectServicesComponent } from './project-services/project-services.component';
import { ProjectBudgetComponent } from './project-budget/project-budget.component';
import { ReviewAndSubmitComponent } from './review-and-submit/review-and-submit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    QuotationComponent,
    DetailsComponent,
    ProjectServicesComponent,
    ProjectBudgetComponent,
    ReviewAndSubmitComponent,
  ],
  imports: [
    CommonModule,
    QuotationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class QuotationModule {}
