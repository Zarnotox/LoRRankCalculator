import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RankCalculateService} from "../../core/services/rank-calculate.service";
import {Division} from "../../shared/enums/division.enum";
import {Rank, SubDivision} from "../../shared/models/rank.model";

@Component({
    selector: 'app-rank-select',
    templateUrl: './rank-select.component.html',
    styleUrls: ['./rank-select.component.css']
})
export class RankSelectComponent {
    division: Division = Division.IRON;
    subDivision: SubDivision = 4

    divisions = [Division.IRON, Division.BRONZE, Division.SILVER, Division.GOLD, Division.PLATINUM, Division.DIAMOND, Division.MASTER];

    @Output()
    divisionChanged = new EventEmitter<Division>();
    @Output()
    subDivisionChanged = new EventEmitter<SubDivision>();


    constructor() {
    }

    getSubDivisionText(): string {
        if(this.division == Division.MASTER) {
            return '';
        }
        return Rank.getSubDivisionText(this.subDivision);
    };

    decrease() {
        if(this.division == Division.IRON && this.subDivision == 4) {
            return;
        } else if (this.subDivision < 4) {
            this.subDivision++;
        } else if (this.subDivision == 4) {
            this.division = this.divisions[this.divisions.indexOf(this.division) - 1];
            this.subDivision = 1;
        }
        this.changed();
    }

    increase() {
        if(this.division == Division.MASTER && this.subDivision == 4) {
            return;
        } else if (this.subDivision > 1) {
            this.subDivision--;
        } else if (this.subDivision == 1) {
            this.division = this.divisions[this.divisions.indexOf(this.division) + 1];
            this.subDivision = 4;
        }
        this.changed();
    }

    changed() {
        this.divisionChanged.next(this.division);
        this.subDivisionChanged.next(this.subDivision);
    }
}
