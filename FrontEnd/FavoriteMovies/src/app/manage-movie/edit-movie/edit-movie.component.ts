import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/movie';
import { MovieService } from 'src/app/movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id)
    .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getMovie();
  }
  
  editMovieData(movie: Movie){
    this.movieService.updateMovie(movie)
    .subscribe(() => this.goBack());
    console.warn(movie)
  }

}
