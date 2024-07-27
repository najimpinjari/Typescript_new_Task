//function 

function printA(){
    console.log(`print() funciton colled `);
}

function printB( a : any ){
    console.log(`print() funciton colled ${a}`);
}


printA();
printB("najim");
printB(100);

const multiply = function(a : number , b : number) : number {
    return a * b ; 
};

console.log(multiply(2,2));


let subs = ( a : number , b : number) : number => a + b ;

console.log(subs (10, 10));

function meet (name : string , telling? : string): string {
    return `${telling  || 'hellow'} , ${name} ! `;
}

console.log(meet("najim"));
console.log(meet("najim", "hi") );

//5. Rest Parameter

function summ(...number: number[]): number {
    return number.reduce((acc ,num ) => acc + num , 0);
}

console.log(summ(1,2,3,4));


//spred array 

// var number3 = [10,20,30];
// var numberb = _spredarray(_spredarray([],number3 , true ), [40,50],false);
// console.log("number of items in numbersB : ".concat(numberb.length));


const numb1 = [10,20,30];
const numb2 = [4,5,6];

const combine = [...numb1 ,...numb2];

console.log(combine);


//7. Default Parameter

function maltiplenew(a : number , b :number = 2): number {
    return a + b ;
}

console.log(maltiplenew(10,10));
console.log(maltiplenew(10));

//8. Recursive Function

function factorial(num : number) : number{
    if (num === 0 ){
        return 1 ; 
    }

    return num * factorial (num - 1 );
}

let fact = factorial(5);
console.log(`factorial of 5     : ${fact}`);


// function overloading

function printH(num : number): number ;
function printH(num: string ): string ;

function printH(val: number | string ):any{
    if (typeof val === 'number'){
        return val * val;
    }else if ( typeof val === 'string'){
        return val.toUpperCase();
    }
}


let c1 = printH(10);
console.log(c1);

let c2 = printH('mamma');
console.log(c2);

//genriec function 

function printi<T>(input : T){
    return input ;
}

console.log(`printI<T> FUNCTION COLLED  :${printi(10)} `);
console.log(`printI<T> FUNCTION COLLED  :${printi("MAMMA")} `);
console.log(`printI<T> FUNCTION COLLED  :${printi([10,20,30])} `);
console.log(`printI<T> FUNCTION COLLED  :${printi(true)} `);