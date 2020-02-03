import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostsPageRoutingModule } from './posts-routing.module';

import { PostsPage } from './posts.page';
import { ComponentsModule } from '@components/components.module';
import { InstagramTabBarComponent } from '@components/instagram-tab-bar/instagram-tab-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PostsPage, InstagramTabBarComponent]
})
export class PostsPageModule {}
