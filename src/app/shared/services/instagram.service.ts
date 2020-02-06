import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '@shared/models/post';
import { environment } from '@environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  constructor(private api: ApiService) {}

  getPosts(limit: number, page: number): Observable<Post[]> {
    return this.api
      .get(environment.apiUrl.instagramApi, `/post?limit=${limit}&page=${page}`)
      .pipe(map((data: any) => data.data));
  }

  getTags(): Observable<[]> {
    return this.api
      .get(environment.apiUrl.instagramApi, '/tag')
      .pipe(map((data: any) => data.data));
  }

  getPostsByTag(limit: number, page: number, tag: string): Observable<Post[]> {
    return this.api
      .get(
        environment.apiUrl.instagramApi,
        `/tag/${tag}/post?limit=${limit}&page=${page}`
      )
      .pipe(map((data: any) => data.data));
  }
}
