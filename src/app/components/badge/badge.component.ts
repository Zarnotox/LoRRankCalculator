import {Component, OnInit} from '@angular/core';
import {Division} from "../../shared/enums/division.enum";
import {RankCalculateService} from "../../core/services/rank-calculate.service";
import {Rank} from "../../shared/models/rank.model";

@Component({
    selector: 'app-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
    division: Division = Division.MASTER;
    subDivision = 'IV';
    lp = 40;

    constructor(private rankCalculateService: RankCalculateService) {
    }

    ngOnInit(): void {
        this.rankCalculateService.getEndRank().subscribe(rank => {
            this.division = rank.division;
            this.lp = rank.lp
            this.subDivision = this.getSubDivisionText(rank);
        })
    }

    private getSubDivisionText(rank: Rank) {
        if(this.division == Division.MASTER) {
            return '';
        }
        return Rank.getSubDivisionText(rank.subDivision);
    }
}
