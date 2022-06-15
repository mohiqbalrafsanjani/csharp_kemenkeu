import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesComponent } from './movies/movies.component';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ManageMovieComponent } from './manage-movie/manage-movie.component';
import { AddMovieComponent } from './manage-movie/add-movie/add-movie.component';
import { EditMovieComponent } from './manage-movie/edit-movie/edit-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ManageMovieComponent,
    AddMovieComponent,
    EditMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
