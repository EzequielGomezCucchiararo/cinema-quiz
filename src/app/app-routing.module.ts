import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PlayComponent } from "./play/play.component";
import { RankingComponent } from "./ranking/ranking.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'play', component: PlayComponent },
    { path: 'ranking', component: RankingComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}