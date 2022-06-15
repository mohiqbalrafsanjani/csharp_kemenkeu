import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-manage-movie',
  templateUrl: './manage-movie.component.html',
  styleUrls: ['./manage-movie.component.scss']
})
export class ManageMovieComponent implements OnInit {

  movies : Movie[] = [];

  constructor(
    private movieService: MovieService,

    ) { }

  getMovies(): void {
    this.movieService.getMovies()
    .subscribe(movies => this.movies = movies)
  }

  ngOnInit(): void { 
    this.getMovies();
  }

  delete(movie: Movie): void {
    this.movies = this.movies.filter(m => m !== movie);
    this.movieService.deleteMovie(movie.id).subscribe();
  }

}
