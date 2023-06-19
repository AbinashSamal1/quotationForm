import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './quotation/details/details.component';
import { ReviewAndSubmitComponent } from './quotation/review-and-submit/review-and-submit.component';
import { ProjectBudgetComponent } from './quotation/project-budget/project-budget.component';

const routes: Routes = [
  { path: '', redirectTo: 'details', pathMatch: 'full' },
  { path: 'details', component: DetailsComponent },
  { path: 'review', component: ReviewAndSubmitComponent },
  { path: 'budget', component: ProjectBudgetComponent },
  {
    path: 'quotation',
    loadChildren: () =>
      import('./quotation/quotation.module').then((m) => m.QuotationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
