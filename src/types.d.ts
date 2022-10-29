interface BottlingEntry {
    date: string;
    productName: string;
    abv: number;
    size0qty: number;
    size1qty: number;
    size2qty: number;
    size3qty: number;
    size4qty: number;
    totalLiters: number;
    totalLAA: number;
    uuid: string;
    createdAt: string;
};

interface Product {
    name: string;
    type: string;
    abv: number;
}