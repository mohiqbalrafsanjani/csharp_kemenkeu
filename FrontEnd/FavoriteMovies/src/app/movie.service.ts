import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MockMovie } from './mock-movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  getMovies(): Movie[] {
    return MockMovie;
  }
  constructor() { }
}
