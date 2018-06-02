import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImageBoxComponent } from './shared/image-box/image-box.component';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { AppRoutingModule } from './app-routing.module';
import { RankingComponent } from './ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageBoxComponent,
    HomeComponent,
    PlayComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
