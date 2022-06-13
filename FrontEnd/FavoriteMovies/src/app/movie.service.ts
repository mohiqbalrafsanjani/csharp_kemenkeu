import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MockMovie } from './mock-movies';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  getMovies(): Observable<Movie[]> {
    const movies = of(MockMovie);
    this.messageService.add('MovieService: fetched movies');
    return movies;
  }
  constructor(private messageService: MessageService) { }
}
