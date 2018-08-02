import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RiskqnaComponent } from './riskqna/riskqna.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectLoadComponent } from './project-load/project-load.component';
import { InfoComponent } from './info/info.component';

import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';



const appRoutes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: 'qna', component: RiskqnaComponent },
  { path: 'manufacturing',component: ProjectLoadComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RiskqnaComponent,
    DashboardComponent,
    ProjectLoadComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
