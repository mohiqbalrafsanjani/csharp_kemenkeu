import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MockMovie } from './mock-movies';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private messageService: MessageService) { }

  getMovies(): Observable<Movie[]> {
    const movies = of(MockMovie);
    this.messageService.add('MovieService: fetched movies');
    return movies;
  }

  getMovie(id: number): Observable<Movie> {
    const movie = MockMovie.find(m => m.id === id)!;
    this.messageService.add(`MovieService: fetched movies id= ${id}`);
    return of(movie);
  }

  
}
