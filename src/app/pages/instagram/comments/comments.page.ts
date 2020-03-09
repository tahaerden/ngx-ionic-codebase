import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstagramService } from '@shared/services/instagram.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Comment } from '@shared/models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss']
})
export class CommentsPage {
  unsub = new Subject();
  comments: Comment[];
  limit = 2;
  page = 0;
  id = Number(this.route.snapshot.paramMap.get('id'));
  constructor(
    private postsApi: InstagramService,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    this.postsApi
      .getCommentsByPost(this.id, this.limit, this.page)
      .pipe(takeUntil(this.unsub))
      .subscribe((data: Comment[]) => {
        this.comments = data;
        // get userID here
      });
  }

  ionViewWillLave() {
    this.unsub.next();
    this.unsub.complete();
  }

  loadData(event: any) {
    this.page += 1;
    this.postsApi
      .getCommentsByPost(this.id, this.limit, this.page)
      .pipe(takeUntil(this.unsub))
      .subscribe((data: Comment[]) => {
        this.comments = [...this.comments, ...data];
        event.target.complete();
        // disable infinite scroll when the next page returns empty result
        if (data.length === 0) {
          event.target.disabled = true;
        }
      });
  }
}
