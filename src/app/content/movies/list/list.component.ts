import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'movie-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class MovieListComponent implements OnInit {

  isLoggedIn = false;
  hasError =  false;
  movies = [];

  constructor(
    private movieService: MoviesService,
    private router: Router,
    private tokenStorageService: TokenStorageService
    ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.movieService.getMoviesList()
      .subscribe({
        next: data => {
          this.movies = data.movies,
          this.hasError = false;
        },
        error: err => {
          this.hasError = true;
        }
      })
  }

  editMovie(id: string):void {
    this.router.navigate(['movie/edit/' + id]);
  }

  deleteMovie(id: string) {
    this.movieService.deleteMovie(id)
      .subscribe({
        next: data => {
          window.location.reload();
        },
        error: err => {
          this.hasError = true;
        }
      })
  }

}
