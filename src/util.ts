export const calcLitersBottled = (qty0: string, qty1: string, qty2: string, qty3: string, qty4: string, update: Function) => {
    let liters: number = 0;

    liters = ((parseFloat(qty0) * .2) + (parseFloat(qty1) * .375) + (parseFloat(qty2) * .750) + (parseFloat(qty3) * 1.14) + (parseFloat(qty4) * 1.75))
    //console.log(`liters: ${liters}`)
    //console.log(`Liters bottled: ${liters}`)

    liters = parseFloat(liters.toFixed(2));

    update(liters);
    return liters;

}

export const calcLAABottled = (abv: string, liters: number, update: Function) => {
    let LAA: number = 0;

    if (abv){
        LAA = liters * (parseFloat(abv) / 100);
        LAA = parseFloat(LAA.toFixed(2));
        update(LAA);
    }

    return LAA;
}