import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RankStartComponent} from './rank-start.component';

describe('RankStartComponent', () => {
    let component: RankStartComponent;
    let fixture: ComponentFixture<RankStartComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RankStartComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RankStartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
