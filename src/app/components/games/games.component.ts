import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.css']
})
export class GamesComponent{
    @Input()
    isWin = true;

    amount: number = 0;

    @Output()
    amountChanged = new EventEmitter<number>();


    add(add: number) {
        this.amount += add;
        this.amountChanged.next(this.amount);
    }

    subtract(subtract: number) {
        this.amount = Math.max(0, this.amount - subtract);
        this.amountChanged.next(this.amount);
    }
}
