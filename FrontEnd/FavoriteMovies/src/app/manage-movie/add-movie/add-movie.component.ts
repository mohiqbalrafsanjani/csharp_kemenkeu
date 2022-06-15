import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  movies : Movie[] = [];

  constructor(
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit(): void {
  
  }

  goBack(): void {
    this.location.back();
  }

  addMovieData(movie: Movie){
    this.movieService.addMovie(movie)
    .subscribe(movieData => {
      this.movies.push(movieData);
    });
    console.warn(movie)
    this.goBack()
  }

}
