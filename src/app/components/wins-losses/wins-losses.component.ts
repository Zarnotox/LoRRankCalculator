import {Component, EventEmitter, Output} from '@angular/core';
import {RankCalculateService} from "../../core/services/rank-calculate.service";

@Component({
    selector: 'app-wins-losses',
    templateUrl: './wins-losses.component.html',
    styleUrls: ['./wins-losses.component.css']
})
export class WinsLossesComponent {

    winsLosses = [new WinLoss(true)];

    @Output()
    totalGamesChanged = new EventEmitter<number>()

    constructor(private rankCalculateService: RankCalculateService) {
    }

    getReverseWinsLosses(): Array<WinLoss> {
        return [...this.winsLosses].reverse();
    }

    add() {
        this.winsLosses.push(new WinLoss(this.winsLosses.length % 2 == 0));
    }

    changeAmount(winLoss: WinLoss, amount: number) {
        winLoss.value = amount;
        this.change();
    }

    change() {
        this.rankCalculateService.setWinsLosses(this.winsLosses.map(wl => wl.isWin ? wl.value : - wl.value))
        this.totalGamesChanged.next(this.winsLosses.map(wl => wl.value).reduce((a,b) => a + b));
    }
}

class WinLoss {
    isWin: boolean
    value = 0;

    constructor(isWin: boolean) {
        this.isWin = isWin;
    }
}
