import {Component} from '@angular/core';
import {Division} from "../../shared/enums/division.enum";
import {Rank, SubDivision} from "../../shared/models/rank.model";
import {RankCalculateService} from "../../core/services/rank-calculate.service";

@Component({
    selector: 'app-rank-start',
    templateUrl: './rank-start.component.html',
    styleUrls: ['./rank-start.component.css']
})
export class RankStartComponent {
    division: Division = Division.IRON;
    subDivision: SubDivision = 4
    lp: number = 0;

    constructor(private rankCalculateService: RankCalculateService) {
    }

    divisionChanged(division: Division) {
        this.division = division;
        this.changed();
    }

    subDivisionChanged(subDivision: SubDivision) {
        this.subDivision = subDivision;
        this.changed();
    }

    lpChanged(lp: number) {
        if (lp >= 100) {
            return;
        } else if (!lp) {
            lp = 0;
        }
        this.lp = lp;
        this.changed();
    }

    changed() {
        this.rankCalculateService.setStartRank(new Rank(this.division, this.subDivision, this.lp));
    }
}
