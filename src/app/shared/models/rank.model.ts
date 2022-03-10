import {Division} from "../enums/division.enum";

export class Rank {
    division: Division;
    subDivision: SubDivision;
    lp: number;

    constructor(division: Division, subDivision: SubDivision, lp: number) {
        this.division = division;
        this.subDivision = subDivision;
        this.lp = lp;
    }

    static getSubDivisionText(subDivision: SubDivision): string {
        switch (subDivision) {
            case 1:
                return 'I';
            case 2:
                return 'II';
            case 3:
                return 'III';
            case 4:
                return 'IV';
        }
    }
}

export type SubDivision = 1 | 2 | 3 | 4;
