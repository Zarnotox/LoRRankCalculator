import {Component, HostBinding, ViewEncapsulation} from '@angular/core';
import {ColorService} from "./core/services/color.service";
import {Division} from "./shared/enums/division.enum";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    title = 'LoRRankCalculator';

    @HostBinding("style.--textColor")
    textColor = this.colorService.getColorOf(Division.IRON).textColor.getRgb();
    @HostBinding("style.--backgroundColor")
    backgroundColor = this.colorService.getColorOf(Division.IRON).backgroundColor.getRgb();
    @HostBinding("style.--buttonTextColor")
    buttonTextColor = this.colorService.getColorOf(Division.IRON).buttonTextColor.getRgb();

    @HostBinding("style.--accentColor")
    accentColor = this.colorService.getColorOf(Division.IRON).accentColor.getRgb();
    @HostBinding("style.--accentHoverColor")
    accentHoverColor = this.colorService.getColorOf(Division.IRON).accentHoverColor.getRgb();

    @HostBinding("style.--borderColor")
    borderColor = this.colorService.getColorOf(Division.IRON).borderColor.getRgb();
    @HostBinding("style.--borderHoverColor")
    borderHoverColor = this.colorService.getColorOf(Division.IRON).borderHoverColor.getRgb();

    @HostBinding("style.--barColor")
    barColor = this.colorService.getColorOf(Division.IRON).barColor.getRgb();


    constructor(private colorService: ColorService) {
        colorService.getColor().subscribe(colorScheme => {
            this.textColor = colorScheme.textColor.getRgb();
            this.backgroundColor = colorScheme.backgroundColor.getRgb();
            this.buttonTextColor = colorScheme.buttonTextColor.getRgb();
            this.accentColor = colorScheme.accentColor.getRgb();
            this.accentHoverColor = colorScheme.accentHoverColor.getRgb();
            this.borderColor = colorScheme.borderColor.getRgb();
            this.borderHoverColor = colorScheme.borderHoverColor.getRgb();
            this.textColor = colorScheme.textColor.getRgb();
        })
    }
}
