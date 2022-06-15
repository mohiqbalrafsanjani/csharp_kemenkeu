import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ManageMovieComponent } from './manage-movie/manage-movie.component';
import { AddMovieComponent } from './manage-movie/add-movie/add-movie.component';
import { EditMovieComponent } from './manage-movie/edit-movie/edit-movie.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'detail/:id', component: MovieDetailComponent},
  { path: 'manage', component: ManageMovieComponent},
  { path: 'manage/add', component: AddMovieComponent},
  { path: 'manage/edit/:id', component: EditMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
