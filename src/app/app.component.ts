import {Component, HostBinding, ViewEncapsulation} from '@angular/core';
import {ColorService} from "./core/services/color.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    title = 'LoRRankCalculator';

    @HostBinding("style.--textColor")
    textColor = this.colorService.iron.textColor.getRgb();
    @HostBinding("style.--backgroundColor")
    backgroundColor = this.colorService.iron.backgroundColor.getRgb();
    @HostBinding("style.--buttonTextColor")
    buttonTextColor = this.colorService.iron.buttonTextColor.getRgb();

    @HostBinding("style.--accentColor")
    accentColor = this.colorService.iron.accentColor.getRgb();
    @HostBinding("style.--accentHoverColor")
    accentHoverColor = this.colorService.iron.accentHoverColor.getRgb();

    @HostBinding("style.--borderColor")
    borderColor = this.colorService.iron.borderColor.getRgb();
    @HostBinding("style.--borderHoverColor")
    borderHoverColor = this.colorService.iron.borderHoverColor.getRgb();

    @HostBinding("style.--barColor")
    barColor = this.colorService.iron.barColor.getRgb();


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
