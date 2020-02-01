import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';
import { HandleErrorService } from '@services/handle-error.service';
import { Post } from '@models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  apiURL = 'https://n161.tech/api/dummyapi';
  constructor(
    private http: HttpClient,
    private handleError: HandleErrorService
  ) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiURL + '/post').pipe(
      map((data: any) => data.data),
      retry(1),
      catchError(this.handleError.showError)
    );
  }
}
