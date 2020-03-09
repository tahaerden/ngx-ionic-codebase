import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '@shared/models/post';
import { InstagramService } from '@shared/services/instagram.service';
import { ActionSheetController } from '@ionic/angular';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss']
})
export class PostDetailsPage {
  unsub = new Subject();
  posts: Post[];
  limit = 2;
  page = 0;
  id = Number(this.route.snapshot.paramMap.get('id'));
  userID: number;
  constructor(
    private postsApi: InstagramService,
    private route: ActivatedRoute,
    private actionCtrl: ActionSheetController
  ) {}

  ionViewWillEnter() {
    this.postsApi
      .getPost(this.id)
      .pipe(takeUntil(this.unsub))
      .subscribe((data: Post[]) => {
        this.posts = data;
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
      .getPostsByUser(this.userID, this.limit, this.page)
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

  openActionSheet() {
    this.actionCtrl
      .create({
        buttons: [
          {
            text: 'Unfollow',
            role: 'destructive',
            handler: () => {
              console.log('Unfollow clicked');
            }
          },
          {
            text: 'Report',
            handler: () => {
              console.log('Report clicked');
            }
          },
          {
            text: 'Copy Link',
            handler: () => {
              console.log('Copy Link clicked');
            }
          },
          {
            text: 'Share',
            handler: () => {
              console.log('Share clicked');
            }
          },
          {
            text: 'Mute',
            handler: () => {
              console.log('Mute clicked');
            }
          },
          {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      })
      .then(ac => ac.present());
  }
}
