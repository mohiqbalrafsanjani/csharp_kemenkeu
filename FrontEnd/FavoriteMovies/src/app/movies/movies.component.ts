import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MockMovie } from '../mock-movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies = MockMovie;
  selectedMovie?:Movie;

  constructor() { }

  ngOnInit(): void { 
  }

  onSelect(_movie: Movie): void {
    this.selectedMovie = _movie
  }

}
