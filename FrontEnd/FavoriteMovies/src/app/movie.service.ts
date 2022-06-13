import { Injectable } from '@angular/core';
import { Movie } from './movie';

import { Observable, of, throwError } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = 'https://localhost:7110/api';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl+'/FavoriteMovie')
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Movie[]>('getMovies', []))
    )
  }

  getMovie(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/FavoriteMovie/${id}`;
    return this.http.get<Movie>(url).pipe(
      tap(_ => this.log(`fetched movie id= ${id}`)),
      catchError(this.handleError<Movie>(`getMovie id= ${id}`))
    );
  }

  private log(message: string) {
    this.messageService.add(`MovieService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error);
  
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }

  
}
