import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const SERVER_ADDRESS = 'my-json-server.typicode.com/luiscaguilarucr/movies-database';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
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
  getMostPopularMovieDetailsList(): Observable<any> {
    return this.http.get(
      this.getEndpoint() + 'get-details', httpOptions
    );
  }

  /**
   * Gets the movie by its tconst.
   * @returns The get request observable.
   */
  getMovieDetailsByTconst(tconst: string): Observable<any> {
    return this.http.get(
      this.getEndpoint() + 'get-details' + JSON.stringify(tconst), httpOptions
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
