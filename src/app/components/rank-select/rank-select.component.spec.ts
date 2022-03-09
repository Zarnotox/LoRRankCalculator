import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RankSelectComponent} from './rank-select.component';

describe('RankSelectComponent', () => {
    let component: RankSelectComponent;
    let fixture: ComponentFixture<RankSelectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RankSelectComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RankSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
