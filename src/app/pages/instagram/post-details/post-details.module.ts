import { NgModule } from '@angular/core';
import { PostDetailsPageRoutingModule } from './post-details-routing.module';

import { PostDetailsPage } from './post-details.page';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [PostDetailsPageRoutingModule, SharedModule],
  declarations: [PostDetailsPage]
})
export class PostDetailsPageModule {}
