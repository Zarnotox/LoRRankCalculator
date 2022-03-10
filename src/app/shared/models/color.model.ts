export class Color {
    private r: number = 0;
    private g: number = 0;
    private b: number = 0;


    constructor(r: number, g: number, b: number) {
        this.setColor(r, g, b)
    }

    setColor(r: number, g: number, b: number): void {
        this.r = Math.max(0, Math.min(r, 255))
        this.g = Math.max(0, Math.min(g, 255))
        this.b = Math.max(0, Math.min(b, 255))
    }

    getRgb(): string {
        return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
    }

    easeColor(color: Color, percentage: number) {
        percentage = Math.max(0, Math.min(percentage, 1))

        const r = this.r + (color.r - this.r) * this.ease(percentage);
        const g = this.g + (color.g - this.g) * this.ease(percentage);
        const b = this.b + (color.b - this.b) * this.ease(percentage);

        return new Color(r, g, b);
    }

    private ease(x: number): number {
        return -(Math.cos(Math.PI * x) - 1) / 2;
    }
}
