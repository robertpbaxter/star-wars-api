import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { HttpClientModule } from "@angular/common/http";
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, DetailComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
