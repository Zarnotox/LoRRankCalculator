import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-games-overview',
    templateUrl: './games-overview.component.html',
    styleUrls: ['./games-overview.component.css']
})
export class GamesOverviewComponent implements OnInit {
    gamesAmount: number = 0;

    constructor() {
    }

    ngOnInit(): void {
    }

    totalChanged(amount: number) {
        this.gamesAmount = amount;
    }
}
