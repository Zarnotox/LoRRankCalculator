import {Injectable} from '@angular/core';
import {Color} from "../../shared/models/color.model";
import {BehaviorSubject, distinctUntilChanged, map, Observable, Subject} from "rxjs";
import {Division} from "../../shared/enums/division.enum";
import {RankCalculateService} from "./rank-calculate.service";

@Injectable({
    providedIn: 'root'
})
export class ColorService {

    colorSchemeSubject: Subject<ColorScheme>;
    currentColor: ColorScheme = {
        textColor: new Color(22, 19, 19),
        backgroundColor: new Color(86, 78, 78),
        buttonTextColor: new Color(235, 230, 230),

        accentColor: new Color(48, 44, 44),
        accentHoverColor: new Color(56, 50, 50),

        borderColor: new Color(30, 30, 30),
        borderHoverColor: new Color(42, 42, 42),

        barColor: new Color(235, 225, 225)
    };

    colorSchemes: Map<Division, ColorScheme> = new Map([
        [Division.IRON, {
            textColor: new Color(22, 19, 19),
            backgroundColor: new Color(86, 78, 78),
            buttonTextColor: new Color(235, 230, 230),

            accentColor: new Color(48, 44, 44),
            accentHoverColor: new Color(56, 50, 50),

            borderColor: new Color(30, 30, 30),
            borderHoverColor: new Color(42, 42, 42),

            barColor: new Color(235, 225, 225)
        }],
        [Division.BRONZE, {
            textColor: new Color(20, 10, 10),
            backgroundColor: new Color(93, 72, 69),
            buttonTextColor: new Color(350, 230, 230),

            accentColor: new Color(55, 40, 40),
            accentHoverColor: new Color(60, 45, 45),

            borderColor: new Color(40, 30, 30),
            borderHoverColor: new Color(50, 40, 40),

            barColor: new Color(245, 215, 215)
        }],
        [Division.SILVER, {
            textColor: new Color(22, 33, 33),
            backgroundColor: new Color(96, 108, 114),
            buttonTextColor: new Color(212, 229, 226),

            accentColor: new Color(40, 55, 55),
            accentHoverColor: new Color(45, 60, 60),

            borderColor: new Color(30, 40, 39),
            borderHoverColor: new Color(40, 50, 49),

            barColor: new Color(202, 218, 214)
        }],
        [Division.GOLD, {
            textColor: new Color(52, 39, 0),
            backgroundColor: new Color(173, 150, 107),
            buttonTextColor: new Color(229, 217, 187),

            accentColor: new Color(84, 70, 45),
            accentHoverColor: new Color(101, 82, 51),

            borderColor: new Color(61, 51, 34),
            borderHoverColor: new Color(79, 68, 44),

            barColor: new Color(255, 242, 211)
        }],
        [Division.PLATINUM, {
            textColor: new Color(34, 56, 54),
            backgroundColor: new Color(107, 169, 165),
            buttonTextColor: new Color(214, 241, 239),

            accentColor: new Color(64, 110, 108),
            accentHoverColor: new Color(75, 136, 135),

            borderColor: new Color(33, 58, 57),
            borderHoverColor: new Color(40, 70, 69),

            barColor: new Color(217, 246, 241)
        }],
        [Division.DIAMOND, {
            textColor: new Color(34, 44, 56),
            backgroundColor: new Color(105, 135, 212),
            buttonTextColor: new Color(220, 222, 239),

            accentColor: new Color(69, 90, 136),
            accentHoverColor: new Color(79, 104, 157),

            borderColor: new Color(24, 31, 47),
            borderHoverColor: new Color(31, 40, 61),

            barColor: new Color(250, 252, 255)
        }],
        [Division.MASTER, {
            textColor: new Color(46, 22, 58),
            backgroundColor: new Color(157, 120, 176),
            buttonTextColor: new Color(226, 208, 236),

            accentColor: new Color(95, 63, 114),
            accentHoverColor: new Color(112, 76, 136),

            borderColor: new Color(46, 30, 54),
            borderHoverColor: new Color(60, 39, 70),

            barColor: new Color(236, 217, 245)
        }],
    ]);
    currentStartColor: ColorScheme | undefined = undefined;

    constructor(private rankCalculateService: RankCalculateService) {
        this.colorSchemeSubject = new BehaviorSubject({
            textColor: new Color(22, 19, 19),
            backgroundColor: new Color(86, 78, 78),
            buttonTextColor: new Color(235, 230, 230),
            accentColor: new Color(48, 44, 44),
            accentHoverColor: new Color(56, 50, 50),
            borderColor: new Color(30, 30, 30),
            borderHoverColor: new Color(42, 42, 42),
            barColor: new Color(235, 225, 225)
        });
        rankCalculateService.getEndRank().pipe(
            map(rank => rank.division),
            distinctUntilChanged()
        ).subscribe(division => this.startEaseTo(this.colorSchemes.get(division)!))
    }

    private startEaseTo(colorScheme: ColorScheme) {
        this.currentStartColor = this.currentColor;
        this.colorSchemeEase(this.currentStartColor, colorScheme, 0);
    }

    colorSchemeEase(startColor: ColorScheme, endColor: ColorScheme, percentage: number = 0) {
        if(this.currentStartColor != startColor) {
            return;
        }
        this.currentColor = {
            barColor: startColor.barColor.easeColor(endColor.barColor, percentage),
            borderColor: startColor.borderColor.easeColor(endColor.borderColor, percentage),
            backgroundColor: startColor.backgroundColor.easeColor(endColor.backgroundColor, percentage),
            borderHoverColor: startColor.borderHoverColor.easeColor(endColor.borderHoverColor, percentage),
            buttonTextColor: startColor.buttonTextColor.easeColor(endColor.buttonTextColor, percentage),
            accentHoverColor: startColor.accentHoverColor.easeColor(endColor.accentHoverColor, percentage),
            accentColor: startColor.accentColor.easeColor(endColor.accentColor, percentage),
            textColor: startColor.textColor.easeColor(endColor.textColor, percentage)
        }
        this.colorSchemeSubject.next({
            barColor: startColor.barColor.easeColor(endColor.barColor, percentage),
            borderColor: startColor.borderColor.easeColor(endColor.borderColor, percentage),
            backgroundColor: startColor.backgroundColor.easeColor(endColor.backgroundColor, percentage),
            borderHoverColor: startColor.borderHoverColor.easeColor(endColor.borderHoverColor, percentage),
            buttonTextColor: startColor.buttonTextColor.easeColor(endColor.buttonTextColor, percentage),
            accentHoverColor: startColor.accentHoverColor.easeColor(endColor.accentHoverColor, percentage),
            accentColor: startColor.accentColor.easeColor(endColor.accentColor, percentage),
            textColor: startColor.textColor.easeColor(endColor.textColor, percentage)
        });
        percentage += 0.005;
        if (percentage <= 1) {
            new Promise(() => setTimeout(() => this.colorSchemeEase(startColor, endColor, percentage), 10));
        }
    }

    getColor(): Observable<ColorScheme> {
        return this.colorSchemeSubject.asObservable();
    }

    getColorOf(division: Division) : ColorScheme{
        return this.colorSchemes.get(division)!;
    }
}

interface ColorScheme {
    textColor: Color,
    backgroundColor: Color,
    buttonTextColor: Color,
    accentColor: Color,
    accentHoverColor: Color,
    borderColor: Color,
    borderHoverColor: Color,
    barColor: Color
}
