import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';
import { HandleErrorService } from '@shared/services/handle-error.service';
import { Post } from '@shared/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  apiURL = 'https://n161.tech/api/dummyapi';
  constructor(
    private http: HttpClient,
    private handleError: HandleErrorService
  ) {}

  getPosts(limit: number, page: number): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${this.apiURL}/post?limit=${limit}&page=${page}`)
      .pipe(
        map((data: any) => data.data),
        retry(1),
        catchError(this.handleError.showError)
      );
  }
}
