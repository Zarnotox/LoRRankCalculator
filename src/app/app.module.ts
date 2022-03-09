import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ButtonModule} from "primeng/button";
import {BadgeComponent} from './components/badge/badge.component';
import {ImageModule} from "primeng/image";
import {ProgressBarModule} from "primeng/progressbar";
import {DialogModule} from "primeng/dialog";
import {GamesOverviewComponent} from './components/games-overview/games-overview.component';
import {WinsLossesComponent} from './components/wins-losses/wins-losses.component';
import {GamesComponent} from './components/games/games.component';
import {RankStartComponent} from './components/rank-start/rank-start.component';
import {InputNumberModule} from "primeng/inputnumber";
import {RankSelectComponent} from './components/rank-select/rank-select.component';

@NgModule({
    declarations: [
        AppComponent,
        BadgeComponent,
        GamesOverviewComponent,
        WinsLossesComponent,
        GamesComponent,
        RankStartComponent,
        RankSelectComponent
    ],
    imports: [
        BrowserModule,
        ButtonModule,
        ImageModule,
        ProgressBarModule,
        DialogModule,
        InputNumberModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
