import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-rank-select',
    templateUrl: './rank-select.component.html',
    styleUrls: ['./rank-select.component.css']
})
export class RankSelectComponent implements OnInit {
    text: string = 'IRON';

    constructor() {
    }

    ngOnInit(): void {
    }

    click() {
        this.text = 'PLATINUM'
    }
}
