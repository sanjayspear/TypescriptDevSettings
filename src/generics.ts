const score : Array<number> = [];
const names : Array<string> = [];

function identityOne(val : number | boolean) : number | boolean {
    return val;
}

identityOne(true)

function identityTwo(val : any) : any {
    return val;
}

identityTwo("Pratap")

function identityThree<Type>( val: Type) : Type {
    return val;
}

identityThree("Sanjay");

function identityFour<T>(val : T) : T {
    return val;
}

function getSearchProducts<T>(products: T[]) : T {
    //do some database operation
    const myIndex = 3;
    return products[myIndex];
}

const getSearchProductss = <T>(products: T[]) : T => {
    //do some database operation
    const myIndex = 3;
    return products[myIndex];
}

function anotherFunction <X, Y extends Bottle>(valueOne: X, valueTwo: Y) : object {
    return {
        valueOne,
        valueTwo
    }
}

const result = anotherFunction("Brevarages", {brand: "Pepsi", type: 4222}); 

interface Bottle {
    brand: string,
    type: number
}

const bottle = identityFour<Bottle>({brand: "Pepsi", type: 4325});