import {Component, OnInit} from '@angular/core';
import {Rank} from "../../shared/enums/rank.enum";

@Component({
    selector: 'app-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
    rank: Rank = Rank.MASTER;
    index = 0;
    subRank = 'IV';
    test = true;
    amount = 40;

    constructor() {
    }

    ngOnInit(): void {
    }

    click() {
        this.test = !this.test;
        this.amount = this.amount > 40 ? 40 : 60;
    }

}
