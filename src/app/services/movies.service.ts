import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

const MOVIE_API  = environment.apiUrl + "/movies/"; // http://localhost:3000/api/movies/
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  //Get List
  getMoviesList(): Observable<any> {
    return this.httpClient.get(MOVIE_API+'list', httpOptions);
  }
  //Get One
  getMovie(id: string): Observable<any> {
    return this.httpClient.get(MOVIE_API+id, httpOptions);
  }
  //Add
  addMovie(movie: any): Observable<any> {
    return this.httpClient.post(MOVIE_API+'add', movie, httpOptions );
  }
  //Edit
  editMovie(movie: any) : Observable<any> {
    return this.httpClient.put(MOVIE_API+'edit/'+movie['_id'], movie, httpOptions);
  }
  //Delete
  deleteMovie(id: string) {
    return this.httpClient.delete(MOVIE_API+'delete/'+id, httpOptions);
  }
}
