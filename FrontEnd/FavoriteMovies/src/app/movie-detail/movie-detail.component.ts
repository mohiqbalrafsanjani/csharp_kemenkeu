import { Component, Input, OnInit, Sanitizer } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
    private sanitizer: DomSanitizer
  ) {}

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

  videoUrl(url: string): SafeUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
