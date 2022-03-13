import {Injectable} from '@angular/core';
import {Rank, SubDivision} from "../../shared/models/rank.model";
import {Division} from "../../shared/enums/division.enum";
import {combineLatest, map, Observable, ReplaySubject, Subject, tap} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RankCalculateService {

    startRank: Subject<Rank> = new ReplaySubject<Rank>(1);
    rankDeltas: Map<Division, Delta>
    winsLosses: Subject<Array<number>> = new ReplaySubject<Array<number>>(1);
    divisions = [Division.IRON, Division.BRONZE, Division.SILVER, Division.GOLD, Division.PLATINUM, Division.DIAMOND, Division.MASTER];

    constructor() {
        const lowestRank: Rank = new Rank(Division.IRON, 4, 0);
        this.startRank.next(lowestRank);
        this.winsLosses.next([]);
        this.rankDeltas = new Map([
            [Division.IRON, new Delta(28, 0)],
            [Division.BRONZE, new Delta(24, 12)],
            [Division.SILVER, new Delta(22, 14)],
            [Division.GOLD, new Delta(20, 16)],
            [Division.PLATINUM, new Delta(20, 20)],
            [Division.DIAMOND, new Delta(20, 20)],
            [Division.MASTER, new Delta(0, 0)]
        ])
    }

    setStartRank(rank: Rank) {
        this.startRank.next(rank);
    }

    setWinsLosses(winsLosses: Array<number>) {
        this.winsLosses.next(winsLosses);
    }

    getEndRank(): Observable<Rank> {
        return combineLatest([this.startRank.asObservable(), this.winsLosses.asObservable()]).pipe(
            map(([startRank, winsLosses]) => this.calculateEndRank(startRank, winsLosses)),
            tap(rank => console.log(rank))
        )
    }

    private calculateEndRank(startRank: Rank, winsLosses: Array<number>): Rank {
        winsLosses.forEach(amount => {
            startRank = amount > 0 ? this.addWins(startRank, amount) : this.addLosses(startRank, Math.abs(amount));
        });
        return startRank;
    }

    private addWins(rank: Rank, wins: number): Rank {
        if (this.getWinDelta(rank) == 0 || wins == 0) {
            return rank;
        }

        const lpForNextDivision = rank.subDivision * 100 - rank.lp
        const winsNeededForNextRank = Math.ceil(lpForNextDivision / this.getWinDelta(rank))

        if (winsNeededForNextRank <= wins) {
            const newLp = (rank.lp + winsNeededForNextRank * this.getWinDelta(rank)) % 100;
            const newDivision = this.getDivisionUp(rank.division);
            return this.addWins(new Rank(newDivision, 4, newLp), wins - winsNeededForNextRank);
        }

        const totalLp = rank.lp + wins * this.getWinDelta(rank);
        const addDivisions = Math.floor(totalLp / 100);
        const newLp = totalLp % 100;

        return new Rank(rank.division, (rank.subDivision - addDivisions) as SubDivision, newLp);
    }

    private addLosses(rank: Rank, losses: number): Rank {
        if (this.getLossDelta(rank) == 0 || losses == 0) {
            return rank;
        }

        console.log({losses})

        const totalLp = (4 - rank.subDivision) * 100 + rank.lp
        const lpLoss = losses * this.getLossDelta(rank);
        const newTotalLp = Math.max(0, totalLp - lpLoss);
        const newSubDivision = 4 - Math.floor(newTotalLp / 100)
        const newLp = newTotalLp % 100;

        return new Rank(rank.division, newSubDivision as SubDivision, newLp);
    }

    private getWinDelta(rank: Rank): number {
        return this.rankDeltas.get(rank.division)!.increment
    }

    private getLossDelta(rank: Rank): number {
        return this.rankDeltas.get(rank.division)!.decrement
    }

    private getDivisionUp(division: Division): Division {
        return this.divisions[this.divisions.indexOf(division) + 1];
    }
}

class Delta {
    increment: number;
    decrement: number;


    constructor(increment: number, decrement: number) {
        this.increment = increment;
        this.decrement = decrement;
    }
}
