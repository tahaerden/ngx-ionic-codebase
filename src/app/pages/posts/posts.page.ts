import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Observable } from 'rxjs';
import { Post } from '@models/post';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss']
})
export class PostsPage implements OnInit {
  posts$: Observable<Post[]>;
  constructor(
    private postsApi: PostsService,
    private actionCtrl: ActionSheetController
  ) {}

  ngOnInit() {
    this.posts$ = this.postsApi.getPosts();
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
