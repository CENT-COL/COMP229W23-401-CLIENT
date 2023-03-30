import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'movie-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class MovieEditComponent {

  form: any = {
    _id: null,
    name: null,
    year: null,
    director: null,
    genre: null,
    runtime: null
  }

  isSuccessfull = true;
  errorMessage = "";

  constructor(private movieService: MoviesService, 
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe({
        next: params => {
          this.form._id = params['id']; // :id 

          this.movieService.getMovie(this.form._id)
            .subscribe({
              next: data => {
                this.form = data.movie;
              },
              error: err => {
                this.errorMessage = err.error.message;
                this.isSuccessfull = false;
              }
            })

        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSuccessfull = false;
        }
      })

  }

  onSubmit(){
    this.movieService.editMovie(this.form)
      .subscribe({
        next: data => {
          console.log(data);
          this.isSuccessfull = true;
          this.router.navigate(['/movie/list']);
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSuccessfull = false;
        }
      })
  }
}
