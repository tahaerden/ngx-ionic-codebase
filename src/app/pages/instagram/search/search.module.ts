import { NgModule } from '@angular/core';
import { SearchPageRoutingModule } from './search-routing.module';
import { SearchPage } from './search.page';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [SearchPageRoutingModule, SharedModule],
  declarations: [SearchPage]
})
export class SearchPageModule {}
