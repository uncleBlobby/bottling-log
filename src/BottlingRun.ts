export class BottlingRun {
    date: string;
    product: string;
    abv: string;
    s200ml: number;
    s375ml: number;
    s750ml: number;
    s114L: number;
    s175L: number;
    totalLiters: number;
    totalLAA: number;

    constructor(newDate: string, newProduct: string, newAbv: string, new200ml: number, new375ml: number, new750ml: number, new114L: number, new175L: number, newTotalLiters: number, newTotalLAA: number){
        this.date = newDate;
        this.product = newProduct;
        this.abv = newAbv;
        this.s200ml = new200ml;
        this.s375ml = new375ml;
        this.s750ml = new750ml;
        this.s114L = new114L;
        this.s175L = new175L;
        this.totalLiters = newTotalLiters;
        this.totalLAA = newTotalLAA;
    }

    

}