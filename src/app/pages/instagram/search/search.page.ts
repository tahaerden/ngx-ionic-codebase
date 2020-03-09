import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '@shared/models/post';
import { takeUntil } from 'rxjs/operators';
import { InstagramService } from '@shared/services/instagram.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss']
})
export class SearchPage {
  unsub = new Subject();
  posts: Post[];
  tags: string[];
  limit: number;
  page: number;
  selectedTag: string;
  constructor(private postsApi: InstagramService, private router: Router) {}

  ionViewWillEnter() {
    this.postsApi
      .getTags()
      .pipe(takeUntil(this.unsub))
      .subscribe((data: []) => {
        this.tags = data;
        this.selectedTag = 'any';
      });
  }

  ionViewWillLave() {
    this.unsub.next();
    this.unsub.complete();
  }

  loadData(event: any) {
    this.page += 1;
    this.postsApi
      .getPostsByTag(this.limit, this.page, this.selectedTag)
      .pipe(takeUntil(this.unsub))
      .subscribe((data: Post[]) => {
        this.posts = [...this.posts, ...data];
        event.target.complete();
        // disable infinite scroll when the next page returns empty result
        if (data.length === 0) {
          event.target.disabled = true;
        }
      });
  }

  searchPostsByTag() {
    this.posts = [];
    this.limit = 12;
    this.page = 0;

    this.postsApi
      .getPostsByTag(this.limit, this.page, this.selectedTag)
      .pipe(takeUntil(this.unsub))
      .subscribe((data: []) => {
        this.posts = data;
      });
  }

  showPostDetails(id: number) {
    this.router.navigate(['employee-details', id]);
  }
}
