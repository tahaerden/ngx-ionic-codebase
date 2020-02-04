import { NgModule } from '@angular/core';
import { PostsPageRoutingModule } from './posts-routing.module';
import { PostsPage } from './posts.page';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [PostsPageRoutingModule, SharedModule],
  declarations: [PostsPage]
})
export class PostsPageModule {}
