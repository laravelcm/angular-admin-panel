import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'environments/environment';
import { Plan } from '../interfaces/plan.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http: HttpClient) { }

  createPlan(plan: Plan) {
    return this.http.post<{ plans: Plan[], message: string }>(`${environment.apiUrl}/plans/create`, plan);
  }
}
