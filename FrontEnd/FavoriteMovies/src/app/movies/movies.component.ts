import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MockMovie } from '../mock-movies';
import { MovieService } from '../movie.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies : Movie[] = [];
  selectedMovie?:Movie;

  constructor(
    private movieService: MovieService,
    private messageService: MessageService
    ) { }

  getMovies(): void {
    this.movieService.getMovies()
    .subscribe(movies => this.movies = movies)
  }

  ngOnInit(): void { 
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    this.messageService.add(`MoviesComponent: Selected Movie Id= ${movie.id}`);
  }

}
