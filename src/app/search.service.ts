import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Result } from "./result";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  constructor(private http: HttpClient) {}

  private baseUrl = "https://swapi.co/api/";

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      //TODO: send the error to remote logging infrastructure
      console.error(error);

      //Let the app keep running by returning an empty result
      return of(result as T);
    };
  }

  search(api: string, term: string): Observable<Result[]> {
    if (!term.trim()) {
      //if not search term, return empty hero array
      return of([]);
    }
    return this.http
      .get<Result[]>(`${this.baseUrl}/${api}/?search=${term}`)
      .pipe(catchError(this.handleError<Result[]>("search", [])));
  }
}
