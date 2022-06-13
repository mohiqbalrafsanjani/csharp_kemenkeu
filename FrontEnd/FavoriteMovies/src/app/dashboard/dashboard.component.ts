import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  movies: Movie[]= [];
  constructor(private movieService: MovieService) { }

  getMovies(): void {
    this.movieService.getMovies()
    .subscribe(movies => this.movies = movies.slice(0,5));
  }

  ngOnInit(): void {
    this.getMovies();
  }

}
