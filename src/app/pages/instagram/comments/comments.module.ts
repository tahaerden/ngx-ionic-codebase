import { NgModule } from '@angular/core';
import { CommentsPageRoutingModule } from './comments-routing.module';

import { CommentsPage } from './comments.page';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [CommentsPageRoutingModule, SharedModule],
  declarations: [CommentsPage]
})
export class CommentsPageModule {}
