let arrGCD=[16,24,64]


function gcdCalc(a,b) {
let gcd;
   if (a>b) {
        gcd=b;
    }else{
        gcd=a;
    } 
    while (a % gcd != 0 || b % gcd != 0 ) {
        gcd--;
    }
    return(gcd)
}

console.log(gcdCalc(gcdCalc(arrGCD[0],arrGCD[1]),gcdCalc(arrGCD[0],arrGCD[2])))