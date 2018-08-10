import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule } from '@angular/material';
import { TableComponent } from './table/table.component';
import { MyDashboardComponent } from './dashboard/my-dashboard.component';

// Routes
import { RouterModule, Routes } from '@angular/router';
import { TeamBlauwComponent } from './team-blauw/team-blauw.component';
import { TeamWitComponent } from './team-wit/team-wit.component';
import { TeamRoodComponent } from './team-rood/team-rood.component';
import { TeamOranjeComponent } from './team-oranje/team-oranje.component';

const routes: Routes = [
  { path: 'team-blauw', component: TeamBlauwComponent },
  { path: 'team-wit', component: TeamWitComponent },
  { path: 'team-rood', component: TeamRoodComponent },
  { path: 'team-oranje', component: TeamOranjeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TableComponent,
    MyDashboardComponent,
    TeamBlauwComponent,
    TeamWitComponent,
    TeamRoodComponent,
    TeamOranjeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
