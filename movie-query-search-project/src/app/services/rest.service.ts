import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

const SERVER_ADDRESS = 'gateway.marvel.com:443';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-rapidapi-key': 'cd4787de66msh6cb0d6053c17b56p1812f7jsn688e82f126e5',
    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  /**
   * Gets the tconst list of the movies.
   * @returns The get request observable.
   */
  getMostPopularMoviesList(): Observable<any> {
    return this.http.get(
      this.getEndpoint() + '/v1/public/series?title=Iron%20Man&apikey=7f5764f63daa175af90c5893da6b64ce'
    );
  }

  /**
   * Gets the movie by its tconst.
   * @returns The get request observable.
   */
  getMovieDetailsByTconst(tconst: string): Observable<any> {
    return this.http.get(
      this.getEndpoint() + 'title/get-details?tconst=' + tconst, httpOptions
    );
  }

  /**
   * Gets the API endpoint.
   * @returns The API endpoint string .
   */
  private getEndpoint(): string {
    return `https://${SERVER_ADDRESS}/`;
  }
}
