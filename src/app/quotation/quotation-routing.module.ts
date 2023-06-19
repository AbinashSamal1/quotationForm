import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotationComponent } from './quotation.component';
import { DetailsComponent } from './details/details.component';
import { ReviewAndSubmitComponent } from './review-and-submit/review-and-submit.component';

const routes: Routes = [
  { path: '', component: QuotationComponent },
  { path: 'detail', component: DetailsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotationRoutingModule {}
