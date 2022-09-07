import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SUBSCRIPTION_ROUTES } from './routes/subscription.routes';
import { CreatePlanComponent } from './pages/create-plan/create-plan.component';
import { PlanEffects } from './store/plan.effects';


@NgModule({
  declarations: [
    CreatePlanComponent
  ],
  imports: [
    EffectsModule.forFeature([PlanEffects]),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(SUBSCRIPTION_ROUTES),
    SharedModule,
  ],
  exports: [],
})
export class SubscriptionModule { }
