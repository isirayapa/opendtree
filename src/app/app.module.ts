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

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database';

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
    AngularFireModule.initializeApp(environment.firebase, 'fcc-book-trading'),
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
    
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})

export class AppModule { }
