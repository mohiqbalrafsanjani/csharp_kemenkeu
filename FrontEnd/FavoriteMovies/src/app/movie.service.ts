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

  private moviesUrl = 'https://localhost:7110/api/FavoriteMovie';

  httpOptions = {
    Headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesUrl,movie)
    .pipe(
      tap((newMovie: Movie) => this.log(`added hero w/ id=${newMovie.id}`)),
      catchError(this.handleError<Movie>('addMovies'))
    )
  }

  updateMovie(movie: Movie): Observable<Movie[]> {
    return this.http.put<Movie[]>(this.moviesUrl,movie)
    .pipe(
      tap(_ => this.log('fetched movies')),
      catchError(this.handleError<Movie[]>('updateMovies', []))
    )
  }

  deleteMovie(id: number) {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.delete<Movie>(url).pipe(
      tap(_ => this.log(`fetched movie id= ${id}`)),
      catchError(this.handleError<Movie>(`deleteMovie id= ${id}`))
    );
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
    .pipe(
      tap(_ => this.log('fetched movies')),
      catchError(this.handleError<Movie[]>('getMovies', []))
    )
  }

  getMovie(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
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
